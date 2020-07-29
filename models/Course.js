const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: "Enter a title."
  },
  image: {
    type: Buffer
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  Users: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      instructor: { type: Boolean },
      currentPage: { type: Number },
      dateStarted: {
        type: Date,
        default: Date.now
      },
      dateCompleted: {
        type: Date
      }
    }
  ]
});

const Course = mongoose.model("User", courseSchema);

module.exports = Course;
