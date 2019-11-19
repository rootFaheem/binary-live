// const mongoose = require("mongoose")

export const UserModel = mongoose.model(
  "user",
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);
