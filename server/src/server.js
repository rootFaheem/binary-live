const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

const typeDefs = require("../app/typeDefs/typeDefs");
const resolvers = require("../app/resolvers/resolvers");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

module.exports = app;
