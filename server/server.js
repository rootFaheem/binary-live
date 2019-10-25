const express = require("express");
const app = express();

let users = [];
let connections = [];

const server = app.listen(8080, () => {
  console.log("server running at...", 8080);
});

const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("new connection added to the list");
  connections.push(socket);
  console.log("current list is:", connections.length);
});
