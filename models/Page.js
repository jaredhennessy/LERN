const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  pageNumber: {
    type: Number,
    required: "Enter a page number to sort this page."
  },
  title: {
    type: String,
    required: "Enter a title for this page."
  },
  image: {
    type: String
  },
  text: {
    type: String
  },
  link: {
    type: String
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course"
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
