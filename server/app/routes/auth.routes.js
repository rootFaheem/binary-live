const express = require("express");
const router = express.Router();

const registerUser = require("../controllers/auth/register.controller");
const loginUser = require("../controllers/auth/login.controller");

// Auth @routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
