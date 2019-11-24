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

app.use(cors());

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    // console.log("req::", req.cookies);
    console.log("res in server::", res.cookie);
    return {
      req,
      res
    };
  }
});

server.applyMiddleware({ app });

module.exports = app;
