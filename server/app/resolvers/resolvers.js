const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { SECRET_KEY } = require("../../configs/keys");

const resolvers = {
  Query: {
    hello: () => "hello",

    getUsers: () => UserModel.find(),

    login: async (_, args, ctx, info) => {
      const { email, password } = args;
      console.log("login hit");
      console.log("_", _);
      console.log("args:", args);
      console.log("ctx:", ctx);
      console.log("ctx.res:", ctx.res);
      console.log("info:", info);
      let user = await UserModel.findOne({ email });

      if (!user) {
        return { success: false, message: "user not found" };
      }

      let isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = jwt.sign({ email: user.email }, SECRET_KEY);

        ctx.cookie("token", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 31
        });
        console.log(ctx.res);

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
