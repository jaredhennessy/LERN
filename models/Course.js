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
    ref: "Instructor"
  }
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});


courseSchema.virtual("pages", {
  ref: "Page",
  localField: "_id",
  foreignField: "course",
  justOne: false
})

courseSchema.virtual("totalPages").get(function () {
  if (this.pages === undefined) {
    return 0
  } else {
    return this.pages.length
  }
})

courseSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "courses.Course",
  justOne: false
})

courseSchema.virtual("totalLerners").get(function () {
  if (this.users === undefined) {
    return 0
  } else {
    return this.users.length
  }
})

// courseSchema.virtual("totalInProgress").get(function () {
//   if (this.users) {
//     const inProgress = this.users.filter(user => {
//       return user.dateCompleted === null && this._id === this.user.Course;
//     });
//     if (this.inProgress === []) {
//       return 0
//     } else {
//       return inProgress.length
//     }
//   } else return null
// })

// courseSchema.virtual("totalCompleted").get(function () {
//   if (this.users) {
//     const completed = this.users.filter(user => {
//       return user.dateCompleted !== null && this._id === this.user.Course;
//     });
//     if (this.completed === []) {
//       return 0
//     } else {
//       return completed.length
//     }
//   } else return null
// })

// courseSchema.virtual("percentComplete").get(function () {
//   return (this.totalCompleted / this.totalLerners) * 100
// })

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
