const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
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
      ref: "Instructor"
    }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

courseSchema.virtual("pages", {
  ref: "Page",
  localField: "_id",
  foreignField: "course",
  justOne: false
});

courseSchema.virtual("totalPages").get(function () {
  if (this.pages === undefined) {
    return 0;
  } else {
    return this.pages.length;
  }
});

courseSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "courses.Course",
  justOne: false
});

courseSchema.virtual("totalLerners").get(function () {
  if (this.users === undefined) {
    return 0;
  } else {
    return this.users.length;
  }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
