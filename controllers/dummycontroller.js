const Model = require("../model/schema");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.loginController_post = async (req, res) => {
  let { email, password } = req.body;

  
};


// SWITCHED 
const user = Model.findOne({ email }, (err, data) => {
  handleErr(err);
  if (data) {
    const passwordsMatch = bcrypt.compareSync(password, data.password);
    if (!passwordsMatch) {
      res.send(`passwords is incorrect`);
    } else {
      jwt.sign({
        email:data.email,
      });
      res.json({
        message:"user Confirmed",
        successful: true,
        status: 200,
        data,
      });
    }
  }
});