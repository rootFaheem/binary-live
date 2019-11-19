const UserModel = require("../models/user.model");

const resolvers = {
  Query: {
    hello: () => "hello"
  },
  Mutation: {
    registerUser: async (_, { name, email, password }) => {
      console.log("name", name);
      console.log("email", email);
      console.log("password", password);
      return { id: "1", name, message: "jabba" };
    }
  }
};

module.exports = resolvers;
