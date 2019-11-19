const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const typeDefs = require("./app/typeDefs/typeDefs");
const resolvers = require("./app/resolvers/resolvers");

const { MONGODB_URI, PORT } = require("./configs/keys");

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

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(
    `🚀  server is running at http://localhost:4000${server.graphqlPath} `
  )
);
