const app = require("../src/server");
const http = require("http");
const mongoose = require("mongoose");

const { PORT, MONGODB_URI } = require("../configs/keys");

const startServer = async () => {
  // Get port from environment and store in Express.
  app.set("port", PORT);

  // Create HTTP server.
  const server = await http.createServer(app);

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

  server.listen(PORT, () => {
    console.log(" 🚀    Server listening on port", PORT);
  });
};
startServer();
