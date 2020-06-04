const config = require("config");
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.header("x-auth-token");

  //Check for token
  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, config.get("jwt_secret"));

    //Add user from payload
    req.user = decoded;
  } catch (e) {
    res.status(400).json({ msg: "Invalid Token" });
  }

  next();
}

module.exports = authenticate;
