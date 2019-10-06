const express = require("express");
const io = require("scoket.io")(http);

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "connected to server"
  });
});

io.on("connection", socket => {
  console.log("client is connected");
});

app.listen("5000", () => console.log("listening on the port: 5000"));
