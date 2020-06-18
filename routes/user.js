const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch();
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check user existence
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });

    //Create salt and hash

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        if (err) throw err;
        newUser.password = hash;

        newUser
          .save()
          .then((user) => {
            //console.log("user from register api:", user);
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
                  },
                });
              }
            );
          })
          .catch();
      });
    });
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch();
});

module.exports = router;
