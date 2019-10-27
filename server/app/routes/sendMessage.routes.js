const express = require("express");
const router = express.Router();

const SendMessageController = require("../controllers/sendMessage/sendMessage.controller");

router.post("/send-message", SendMessageController);

module.exports = router;
