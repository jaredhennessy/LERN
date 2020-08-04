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
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

userSchema.virtual("coursesEnrolled").get(function () {
  if (this.courses === []) {
    return 0
  } else {
    return this.courses.length
  }
})

userSchema.virtual("coursesInProgress").get(function () {
  const inProgress = this.courses.filter(course => {
    return course.dateCompleted === null;
  });
  if (this.inProgress === []) {
    return 0
  } else {
    return inProgress.length
  }
})

userSchema.virtual("coursesCompleted").get(function () {
  const completed = this.courses.filter(course => {
    return course.dateCompleted !== null;
  });
  if (this.completed === []) {
    return 0
  } else {
    return completed.length
  }
})

userSchema.virtual("percentComplete").get(function () {
  return (this.coursesCompleted / this.coursesEnrolled) * 100
})

const User = mongoose.model("User", userSchema);

module.exports = User;
