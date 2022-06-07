// jshint esversion:6
const express = require("express");
const _ = require("lodash");
const app = express();
const authRoutes = require(`./routes/authRoutes`);
// const { conn } = require(`./model/mongoose`);

// middlewares
app.use(`/`,authRoutes);
app.use(express.json());



const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
