const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
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
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch(next);
});

module.exports = router;
