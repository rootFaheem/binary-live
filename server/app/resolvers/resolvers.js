const UserModel = require("../models/user.model");

const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    hello: () => "hello",

    getUsers: () => UserModel.find(),

    login: async (_, { email, password }) => {
      let user = await UserModel.findOne({ email });

      if (!user) {
        return { success: false, message: "user not found" };
      }

      let isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        return { success: true, message: "you are now logged-in" };
      } else {
        return { success: false, message: "password incorrect" };
      }
    }
  },
  Mutation: {
    registerUser: async (_, { name, email, password }) => {
      let userExists = await UserModel.findOne({ email });

      if (userExists) {
        return { id: "1", name: "not a user", email: "already registered" };
      }

      let hash = await bcrypt.hash(password, 12);

      let newUserModel = new UserModel({
        name,
        email,
        password: hash
      });

      let doc = await newUserModel.save();
      console.log("doc", doc);

      return {
        id: doc._id,
        name: doc.name,
        email: doc.email
      };
    }
  }
};

module.exports = resolvers;
