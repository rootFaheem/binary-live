const io = require("../../utils/socket");

const chat = async (req, res) => {
  console.log("data:", req.body);
  const data = {
    message: "Hi there from server end?",
    userId: "UID-123"
  };

  io.getIO().emit("messages", {
    action: "messages update",
    data
  });
};

module.exports = chat;
