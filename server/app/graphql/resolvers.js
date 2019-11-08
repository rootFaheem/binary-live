const bcrypt = require("bcryptjs");
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
  }
};
