const { mongooseModel } = require("../model/schema");
const validator = require("validator");
const bcrypt = require("bcrypt");
// const mongoose  = require("mongoose");

//------------------TESTING VALIDATOR-------------------
console.log(validator.isEmail(`mikedbci@fmail.com`));
console.log(validator.isStrongPassword(`mikeAdbch@1`));
//------------------------------------------------------

// GENERAL
module.exports.generalController_get = async (req, res) => {
  res.json({
    message: "It's suppose to work",
    status:200
  })

};

// REGISTER
module.exports.registerController_get = async (req, res) => {
  res.json({
    message: `successful`,
    status: 200,

  });
};
module.exports.registerController_post = async (req, res) => {

  //------------------TESTING BCRYPT----------------------

  // creating new mongoose doc
  // const user = new Schema({
  //   email: "mik@g.com",
  //   password: "nkdjvnsovljns",
  // });

  // // generate salt to hashpassword
  // const salt = await bcrypt.genSalt(10);

  // // set password to a hashed password
  // user.password = await bcrypt.hash(user.password, salt);
  // user.save().then((doc) => res.status(201).send(doc));

  //------------------------------------------------------
};

//LOGIN
module.exports.loginController_get = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
};
module.exports.loginController_post = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
};

// RESTRICTED
module.exports.restrictedController_get = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
};
