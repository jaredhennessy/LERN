const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  category: {
    type: String,
    required: "Enter a category name."
  },
  image: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Category = mongoose.model("Category", catSchema);

module.exports = Category;
