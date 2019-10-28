const Joi = require("@hapi/joi");

const registerUserSchema = Joi.object({
  userName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] }
  }),

  pass1: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

  pass2: Joi.ref("pass1")
});

module.exports = { registerUserSchema };
