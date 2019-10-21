const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

let users = [];
let connections = [];

server.listen(process.env.PORT || 5000);
console.log("server running at...", 5000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", socket => {
  console.log("socket hit:");
  connections.push(socket);
  console.log("Connected: %s sockets connected", connections.length);

  // Disconnect
  socket.on("disconnect", data => {
    connections.splice(connections.indexOf(socket));
    console.log("Disconnected: %s sockets connection", connections.length);
  });

  // Send Messages
  socket.on("Send Message", data => {
    console.log("data:", data);
    io.sockets.emit("new message", { msg: data });
  });
});
