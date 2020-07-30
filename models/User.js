const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: "Enter an email address."
  },
  username: {
    type: String,
    unique: true,
    required: "Enter a username."
  },
  password: {
    type: String,
    required: "Enter a password."
  },
  image: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  courses: [
    {
      Course: { type: Schema.Types.ObjectId, ref: "Course" },
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

const User = mongoose.model("User", userSchema);

module.exports = User;
