const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch();
});

router.post("/", (req, res) => {
  const author_id = req.body.author_id;
  const category_id = req.body.category_id;
  const title = req.body.title;
  const body = req.body.body;

  new Post({
    author_id: author_id,
    category_id: category_id,
    title: title,
    body: body,
  })
    .save()
    .then((post) => {
      res.json(post);
    })
    .catch();
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch();
});

module.exports = router;
