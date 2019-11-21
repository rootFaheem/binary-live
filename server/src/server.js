const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");

const typeDefs = require("./app/typeDefs/typeDefs");
const resolvers = require("./app/resolvers/resolvers");

const { MONGODB_URI, PORT } = require("./configs/keys");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose
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

  app.listen(PORT, () =>
    console.log(
      `🚀  server is running at http://localhost:${PORT}${server.graphqlPath} `
    )
  );
};

startServer();
