const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/auth/auth.controller");
// const logoutController = require("../../controllers/auth/logout.controller");

// Login @route

router.post("/register", registerUser);

// router.post("/login", loginController);
// router.post("/logout", logoutController);

module.exports = router;
