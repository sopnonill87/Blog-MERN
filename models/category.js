const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;
