const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017`;

mongoose.connect(url, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on("error", console.error.bind(console, "connection error:"));

conn.on("connected", () => {
  console.log("connected to mongoDB");
});
conn.on("disconnected", () => {
  console.log("disconnected from mongoDB");
});

module.exports = conn;
