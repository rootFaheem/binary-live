const userModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../../../configs/keys");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  userModel
    .findOne({
      email
    })
    .then(user => {
      if (!user) {
        return res.status(302).json({
          success: false,
          errMsg: "user does not exists"
        });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email
          };

          jwt.sign(payload, SECRET_KEY, { expiresIn: 3600 }, (err, token) => {
            res.status(200).json({
              success: true,
              message: "you are now logged in",
              payload,
              token: "Bearer" + token
            });
          });
        } else {
          res.status(303).json({
            success: false,
            message: "password incorrect, try again..."
          });
        }
      });
    });
};

module.exports = userLogin;
