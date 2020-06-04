const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const authMiddleware = require("../middleware/authenticate");

router.get("/", (req, res) => {
  //this will return all the data, exposing only the id and action field to the client
  Category.find()
    .then((category) => res.json(category))
    .catch();
});

router.post("/", authMiddleware, (req, res) => {
  const name = req.body.name;

  const newCategory = new Category({ name });

  newCategory
    .save()
    .then((data) => res.json(data))
    .catch();
});

router.delete("/:id", (req, res) => {
  Category.findOneAndDelete({ _id: req.params.id })
    .then((category) => res.json(category))
    .catch();
});

module.exports = router;
