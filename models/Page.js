const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  pageNumber: {
    type: Number,
    required: "Enter a page number to sort this page."
  },
  Title: {
    type: String,
    required: "Enter a title for this page."
  },
  Image: {
    type: Buffer
  },
  Text: {
    type: String
  },
  Course: {
    type: Schema.Types.ObjectId,
    ref: "Course"
  }
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
