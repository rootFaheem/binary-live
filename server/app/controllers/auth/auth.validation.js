const Joi = require("@hapi/joi");

const registerUserSchema = Joi.object().keys({
  userName: Joi.string()
    .trim()
    .min(3)
    .required()
    .error(new Error("email field is required")),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    })
    .trim()
    .min(1)
    .required()
    .error(new Error("email field is required")),

  pass1: Joi.string()
    // .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required()
    .error(new Error("password 1 field is required")),
  pass2: Joi.string()
    // .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required()
    .error(new Error("password 2 field is required"))
});

module.exports = registerUserSchema;

// const Joi = require("@hapi/joi");

// const registerUserSchema = Joi.object({
//   userName: Joi.string()
//     .alphanum()
//     .min(3)
//     .max(30)
//     .required()
//     .error(new Error("username field is required")),

//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: { allow: ["com", "net"] }
//     })
//     .required()
//     .error(new Error("email field is required")),

//   pass1: Joi.string()
//     .pattern(/^[a-zA-Z0-9]{3,30}$/)
//     .required()
//     .error(new Error("pass1 field is required")),
//   pass2: Joi.string()
//     .pattern(/^[a-zA-Z0-9]{3,30}$/)
//     .required()
//     .error(new Error("pass2 field is required"))

//   //   pass2: Joi.ref("pass1")
// });

// module.exports = { registerUserSchema };
