const jwt = require("jsonwebtoken");

const check = (req, res, next) => {
    // console.log(req.headers);
    // return 0

  if (req.headers.authorization) {
    // console.log(req.header.authorization)
    if (req.headers.authorization.split(" ")[0] === "Bearer") {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.jwtKey, (err, payload) => {
        if (err) {
          console.log(err);
        }
        console.log(payload);
        
        next();
      });
    }
  } else {
    res.send("You are not authorized");
  }
};

module.exports = { check };
