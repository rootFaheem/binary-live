const io = require("../../utils/socket");

const chat = async () => {
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
