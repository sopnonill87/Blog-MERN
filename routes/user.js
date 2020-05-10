const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, saltRounds);
  //const password = req.password;

  const newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(next);
});

module.exports = router;
