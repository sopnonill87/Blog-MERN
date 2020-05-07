const express = require("express");
const router = express.Router();
const Category = require("../models/category");

router.get("/", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Category.find()
    .then((category) => res.json(category))
    .catch(next);
});

router.post("/", (req, res, next) => {
  const name = req.body.name;

  const newCategory = new Category({ name });

  newCategory
    .save()
    .then((data) => res.json(data))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Category.findOneAndDelete({ _id: req.params.id })
    .then((category) => res.json(category))
    .catch(next);
});

module.exports = router;
