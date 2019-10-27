const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let users = [];
let connections = [];

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const server = app.listen(8080, () => {
  console.log("server running at...", 8080);
});

const io = require("./app/utils/socket").init(server);

io.on("connection", socket => {
  console.log("new connection added to the list");
  connections.push(socket);
  console.log("current list is:", connections.length);
});
