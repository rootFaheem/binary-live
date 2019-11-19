const UserModel = require("../models/user.model");

const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    hello: () => "hello"
  },
  Mutation: {
    registerUser: async (_, { name, email, password }) => {
      let userExists = await UserModel.findOne({ email });

      if (userExists) {
        return { id: "1", name: "not a user", message: "user already exists" };
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
        message: "user registered successfully"
      };
    }
  }
};

module.exports = resolvers;
