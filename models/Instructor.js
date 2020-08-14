const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
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
    image: {
      type: String
    }
  },
  { collection: "users" }
);

const Instructor = mongoose.model("Instructor", instructorSchema, "users");

module.exports = Instructor;
