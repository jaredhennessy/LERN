const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  category: {
    type: String,
    unique: true,
    required: "Enter a category name."
  },
  image: {
    type: Buffer
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Category = mongoose.model("Category", catSchema);

module.exports = Category;
