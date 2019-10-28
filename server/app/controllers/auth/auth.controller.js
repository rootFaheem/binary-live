const Joi = require("@hapi/joi");

const { registerUserSchema } = require("./auth.validation");

const registerUser = async (req, res) => {
  console.log("req.body", req.body);

  const { userName, email, pass1, pass2 } = req.body;

  const values = {
    userName,
    email,
    pass1,
    pass2
  };

  console.log("value:", values);

  try {
    Joi.validate(
      values,
      {
        abortEarly: true
      },
      err => {
        if (err) {
          console.log("err:", err);
          return res.status(422).json({
            success: false,
            message: err.message
          });
        }
        console.log("user.creating");
        return res.status(200).json({
          success: true,
          message: "you are no registered",
          value
        });
      }
    );
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
