const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "connected to server"
  });
});

app.listen("5000", () => console.log("listening on the port: 5000"));
