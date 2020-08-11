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
  if (this.courses) {
    const inProgress = this.courses
      .filter(course => {
        return course.dateCompleted === null;
      });
    if (this.inProgress === []) {
      return 0
    } else {
      return inProgress.length
    }
  } else return null
})

userSchema.virtual("coursesCompleted").get(function () {
  if (this.courses) {
    const completed = this.courses.filter(course => {
      return course.dateCompleted !== null;
    });
    if (this.completed === []) {
      return 0
    } else {
      return completed.length
    }
  } else return null
})

userSchema.virtual("percentComplete").get(function () {
  return Math.round((this.coursesCompleted / this.coursesEnrolled) * 100)
})

// userSchema.virtual("coursesTaughtDetails", {
//   ref: "Course",
//   localField: "_id",
//   foreignField: "instructor",
//   justOne: false
// })

// userSchema.virtual("coursesTaught").get(function () {
//   if (this.coursesTaughtDetails === []) {
//     return 0
//   } else {
//     return this.coursesTaughtDetails.length
//   }
// })

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
