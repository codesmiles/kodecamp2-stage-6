const Model = require("../model/schema");
const validator = require("validator");
const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");

//------------------TESTING VALIDATOR-------------------
// console.log(validator.isEmail(`mikedbci@fmail.com`));
// console.log(validator.isStrongPassword(`mikeAdbch@1`));
//------------------------------------------------------
const handleErr = (err) => {
  if (err) {
    console.log(err);
  }
};

// GENERAL
module.exports.generalController_get = async (req, res) => {
  res.json({
    message: "It's suppose to work",
    status: 200,
  });
};

// REGISTER
module.exports.registerController_get = async (req, res) => {
  res.json({
    message: `successful`,
    status: 200,
  });
};
module.exports.registerController_post = async (req, res) => {
  // console.log(req.body)
  let { email, password } = req.body;

  if (validator.isEmail(email) && validator.isStrongPassword(password)) {
    
    //------------------USING BCRYPT----------------------
    // generate salt to hashpassword
    const salt = await bcrypt.genSalt(10);
    // set password to a hashed password
    password = await bcrypt.hash(password, salt);
    //----------------------------------------------------

    const insertRecord = new Model({
      email,
      password,
    });

    insertRecord.save((err, data) => {
      handleErr(err);
      res.json({
        successful: true,
        data,
      });
    });
  } else {
    if(!validator.isEmail(email)){
      res.json({
        successful: false,
        message: `Email is not valid`
      });
    }
    if(!validator.isStrongPassword(password)){
      res.json({
        successful: false,
        message: `Password requires at least 8 characters, one number and one special character`
      });
    }
  }
};

//LOGIN
module.exports.loginController_get = async (req, res) => {
  res.json({
    successful: true,
    status:200
  })
};
module.exports.loginController_post = async (req, res) => {
  let { email, password } = req.body;

  Model.findOne({ email }, (err, data) => {
    handleErr(err);
    if (data) {
      res.json({
        successful: true,
        status:200,
        data
      })
    }
  })
};

// RESTRICTED
module.exports.restrictedController_get = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
};
