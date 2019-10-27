const io = require("../../utils/socket");

const chat = async (req, res) => {

  try {
    const { message, userId } = req.body;
    const data = {
      message,
      userId
    };

    await io.getIO().emit("messages", {
      action: "messages update",
      data
    });

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong"
    });
  }
};

module.exports = chat;
