const Model = require("../model/schema");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.loginController_post = async (req, res) => {
  let { email, password } = req.body;

  const user = Model.findOne({ email }, "email password");

  const passwordsMatch = bcrypt.compareSync(password, user.password);
  if (!passwordsMatch) {
    res.send(`passwords is incorrect`);
  } else {
    jwt.sign({ email: user.email,role:user.role }, process.env.jwtKey, (err,token) => {});
   res.send(token)
  }
};
