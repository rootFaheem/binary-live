const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const typeDefs = require("../app/typeDefs/typeDefs");
const resolvers = require("../app/resolvers/resolvers");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:8080", //change with your own client URL
  credentials: true
};

app.use(cors(corsOptions));

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: false
});

server.applyMiddleware({ app });

module.exports = app;
