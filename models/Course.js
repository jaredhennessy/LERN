const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: "Enter a title."
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  Users: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

const Course = mongoose.model("User", courseSchema);

module.exports = Course;
