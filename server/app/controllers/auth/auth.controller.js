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
  try {
    await Joi.validate(
      values,
      registerUserSchema,
      { abortEarly: true },
      err => {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message
          });
        } else {
          console.log("user.creating");
        }
      }
    );

    res.status(200).json({
      success: true,
      message: "you are no registered"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

module.exports = {
  registerUser
};
