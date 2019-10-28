const registerUser = (req, res) => {
  console.log("req.body", req.body);
  res.status(200).json({
    success: true,
    message: "you are no registered"
  });
};

module.exports = {
  registerUser
};
