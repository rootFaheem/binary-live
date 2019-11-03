const Joi = require("@hapi/joi");

const UserModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");

const { registerUserSchema } = require("./auth.validation");

const registerUser = async (req, res) => {
  const { name, email, password1, password2 } = req.body;
  let hashPass = "";

  const values = {
    name,
    email,
    password1,
    password2
  };

  try {
    UserModel.findOne({ email }).then(user => {
      if (user) {
        return res.status(303).json({
          success: false,
          errMsg: "email is already registerd"
        });
      } else {
        if (password1 !== password2) {
          return res.status(303).json({
            success: "false",
            errMsg: "password did not match"
          });
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password1, salt, async (err, hash) => {
            if (err) throw err;

            hashPass = hash;

            const newUserModel = new UserModel({
              name,
              email,
              password: hashPass
            });

            await newUserModel.save();

            return res.status(200).json({
              success: true,
              message: "user registered successfully"
            });
          });
        });
      }
      return;
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
      err
    });
  }
};

module.exports = registerUser;
