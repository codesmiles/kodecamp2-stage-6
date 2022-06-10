const Model = require("../model/schema");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// TO RETURN ERROR
const handleErr = (err) => {
  if (err) {
    console.log(err);
  }
};

// GENERAL
module.exports.generalController_get = async (req, res) => {
  res.json({
    message: "Anyone can access",
    status: 200,
  });
};

// REGISTER
module.exports.registerController_get = async (req, res) => {
  res.json({
    message: `successful`,
    statusCode: 200,
  });
};

module.exports.registerController_post = async (req, res) => {
  let { email, password,role } = req.body; // accepts the body reuests

  if (validator.isEmail(email) && validator.isStrongPassword(password)) {
    //   // To check if it already exist in the database
    const emailExist = await Model.findOne({ email });
    if (emailExist) {
      res.json({
        message: `Email already exist`,
        statusCode: 400,
      });
    } else {
      //------------------USING BCRYPT----------------------
      // generate salt to hashpassword
      const salt = await bcrypt.genSalt(10);
      // set password to a hashed password
      password = await bcrypt.hash(password, salt);

      //----------------------------------------------------

      const insertRecord = new Model({email,password,role});

      insertRecord.save((err, data) => {
        handleErr(err);
        res.json({
          successful: true,
          data,
        });
      });
    }

  } else {
    if (!validator.isEmail(email)) {
      res.json({
        successful: false,
        message: `Email is not valid`,
      });
    }
    if (!validator.isStrongPassword(password)) {
      res.json({
        successful: false,
        message: `Password requires at least 8 characters, one number and one special character`,
      });
    }
  }
};

//LOGIN
module.exports.loginController_get = async (req, res) => {
  res.json({
    successful: true,
    status: 200,
  });
};
module.exports.loginController_post = async (req, res) => {
  let { email, password } = req.body;
  const user = await Model.findOne({ email }, "email password");
 
  const passwordsMatch = bcrypt.compareSync(password, user.password);

 
  const emailMatch = await Model.findOne({email})
 if (!emailMatch){
   res.send("email is not registered")
 }else{
  if (!passwordsMatch) {
    res.send(`passwords is incorrect`);
  } else {
    jwt.sign(
      { email: user.email, role: user.role },
      process.env.jwtKey,
      (err, token) => {
        res.send(token);
      }
    );
    
  }
 }
};

// RESTRICTED
module.exports.restrictedController_get = async (req, res) => {
  res.json({
    successful:true,
    message:`successfuly accessed the Restricted route for logged in users`,
    statusCode:200
  });
};
