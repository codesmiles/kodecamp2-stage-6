// jshint esversion:6
const express = require("express");
const authRoutes = require(`./routes/authRoutes`);
// const { conn } = require(`./model/mongoose`);
const app = express();
// middlewares
app.use(`/`,authRoutes);// ISSUE IN UNDERSTANDING
app.use(express.json());

//IMPORT MONGOOSE-----------------------------------------------------------------
const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017/userAuth`;

mongoose.connect(url, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on("error", console.error.bind(console, "connection error:"));

conn.on("connected", () => {
  console.log("connected to mongoDB");
});
conn.on("disconnected", () => {
  console.log("disconnected from mongoDB");
});
// -----------------------------------------------------------------

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
