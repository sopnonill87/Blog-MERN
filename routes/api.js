const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", (req, res) => {
  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, "action")
    .then((data) => res.json(data))
    .catch();
});

router.post("/", (req, res) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch();
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/:id", (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch();
});

module.exports = router;
