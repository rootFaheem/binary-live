const userModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");

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

      bcrypt.compare(password, user.password);
    });
};

module.exports = userLogin;
