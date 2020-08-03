const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: "Enter a title."
  },
  description: {
    type: String
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
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;