const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const config = require("config");
const authMiddleware = require("../middleware/authenticate");

//User Login
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check user existence
  User.findOne({ email: email }).then((user) => {
    console.log("user", user);

    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    bcrypt.compare(password, user.password).then((result) => {
      console.log("result:", result);

      if (!result) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      jwt.sign(
        { id: user._id },
        config.get("jwt_secret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token: token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
          });
        }
      );
    });
  });
});

//Get user info from token
router.get("/user", authMiddleware, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user))
    .catch();
});

module.exports = router;
