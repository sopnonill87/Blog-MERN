const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Post = require("../models/post");
const authMiddleware = require("../middleware/authenticate");
const { json } = require("express");

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

router.get("/:id/posts", (req, res) => {
  //console.log(req);
  Post.find({ category_id: req.params.id })
    .then((posts) => res.json(posts))
    .catch();
});

module.exports = router;
