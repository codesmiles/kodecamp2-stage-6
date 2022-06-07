
// general
module.exports.generalController_get = async(req, res) =>{
  res.send(`<h1>Its suppose to work</h1>`);
};

// register
module.exports.registerController_get = async (req, res) => {
  res.send(`<h1>new register</h1>`);

};
module.exports.registerController_post = async (req, res) => {
  // res.send(`);}
  console.log(`it suppose work`);
};

// login
module.exports.loginController_get = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
};

module.exports.loginController_post = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
};
// RESTRICTED
module.exports.restrictedController_get = async (req, res) => {
  res.send(`<h1>Its suppose to work</h1>`);
}