const express = require("express");
const router = express.Router();

// const loginController = require("../../controllers/auth/login.controller");
// const logoutController = require("../../controllers/auth/logout.controller");

// Login @route

router.post("/register", registerController);

// router.post("/login", loginController);
// router.post("/logout", logoutController);

module.exports = router;
