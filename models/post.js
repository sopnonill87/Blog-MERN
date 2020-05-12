const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    category_id: String,
    author_id: String,
    title: String,
    body: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
