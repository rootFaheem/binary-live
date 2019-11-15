const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { PORT, MONGODB_URI } = require("./configs/keys");

let users = [];
let connections = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDb conncected...");
  })
  .catch(err => {
    console.log(err);
  });

const server = app.listen(PORT, () => {
  console.log("server running at...", PORT);
});

// const io = require("./app/utils/socket").init(server);

// io.on("connection", socket => {
//   console.log("new connection added to the list");
//   connections.push(socket);
//   console.log("current list is:", connections.length);
// });
