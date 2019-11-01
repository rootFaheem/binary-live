const Joi = require("@hapi/joi");

const UserModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");

const { registerUserSchema } = require("./auth.validation");

const registerUser = async (req, res) => {
  console.log("req.body", req.body);

  const { name, email, pass1, pass2 } = req.body;
  let hashPass = "";

  const values = {
    name,
    email,
    pass1,
    pass2
  };

  console.log("value:", values);

  try {
    UserModel.findOne({ email }).then(user => {
      if (user) {
        return res.status(303).json({
          success: true,
          message: "email is already registerd"
        });
      } else {
        if (pass1 !== pass2) {
          return res.status(303).json({
            success: "false",
            errMsg: "password did not match"
          });
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(pass1, salt, (err, hash) => {
            if (err) throw err;

            hashPass = hash;

            const newUserModel = new UserModel({
              name,
              email,
              password: hashPass
            });

            console.log("newUserModel", newUserModel);
          });
        });

        // await newUserModel.save();
      }
    });

    // Joi.validate(
    //   values,
    //   {
    //     abortEarly: true
    //   },
    //   err => {
    //     if (err) {
    //       console.log("err:", err);
    //       return res.status(422).json({
    //         success: false,
    //         message: err.message
    //       });
    //     }
    //     console.log("user.creating");
    //     return res.status(200).json({
    //       success: true,
    //       message: "you are no registered",
    //       value
    //     });
    //   }
    // );
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
      err
    });
  }
};

module.exports = {
  registerUser
};
