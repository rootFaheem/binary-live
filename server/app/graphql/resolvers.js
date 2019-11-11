const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../../configs/keys");

const validator = require("validator");

const UserModel = require("../models/user.model");

module.exports = {
  createUser: async function({ userInput }, req) {
    // const email = args.userInput.email;
    // OR
    // const email = userInput.email;

    // Validations for email, password and name

    const errors = [];
    if (!validator.isEmail(userInput.email)) {
      errors.push({
        errMsg: "email is not valid"
      });
    }

    if (
      validator.isEmpty(userInput.password) ||
      !validator.isLength(userInput.password, { min: 8 })
    ) {
      errors.push({
        errMsg: "Password must be 8 chars"
      });
    }

    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }

    const existingUser = await UserModel.findOne({ email: userInput.email });
    if (existingUser) {
      const error = new Error("User already exists!");
      throw error;
    }

    const hashedPassword = await bcrypt.hash(userInput.password, 12);

    const user = new UserModel({
      email: userInput.email,
      name: userInput.name,
      password: hashedPassword
    });

    const createdUser = await user.save();

    return { ...createdUser._doc, _id: createdUser._id.toString() };
  },

  userLogin: async function({ userInput }, req) {
    const errors = [];
    if (!validator.isEmail(userInput.email)) {
      errors.push({
        errMsg: "email is not valid"
      });
    }

    if (validator.isEmpty(userInput.password)) {
      errors.push({
        errMsg: "Password is required field"
      });
    }
    let user = await UserModel.find({ email: userInput.email });

    if (!user) {
      errors.push({
        errMsg: "user not found, please register first"
      });
    }

    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const { id, name, email } = user;
        const payload = {
          id,
          name,
          email
        };

        jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" }, (err, token) => {
          if (err) {
            const error = new Error("Failed while signin");
            error.data = errors;
            error.code = 422;
            throw error;
          }
          return req.response.cookies("token", token, {
            // Expires in One Week
            maxAge: 1000 * 60 * 60 * 24 * 7
          });
        });
      }
    });

    return console.log("req::", userInput);
  },

  authCheckUser: async function({ userInput }, req) {
    if (!req.cookies.token) {
      return res.sendStatus(403);
    }

    const { token } = req.cookies;
    const decoded = jwt.verify(token, TOKEN_KEY, { algorithms: ["HS256"] });

    return req.response.json({
      success: true,
      isLoggedIn: true,
      authCheck: true,
      name: decoded.name,
      email: decoded.email
    });
  }
};
