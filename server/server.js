const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  console.log("server connected");
  res.status(200).json({
    success: true,
    message: "connected to server"
  });
});

io.sockets.on("connection", socket => {
  console.log("client is connected");
});

app.listen(5000, () => console.log("listening on the port: 5000"));
