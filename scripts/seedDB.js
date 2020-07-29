const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lerndb",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) throw err;
  }
);

const catSeed = [
  { category: "Finance" },
  { category: "Business" },
  { category: "Math" },
  { category: "Painting" },
  { category: "Pottery" },
  { category: "Fishing" },
  { category: "DIY" },
  { category: "Full-Stack Development" }
];

const userSeed = [
  {
    email: "jared.hennessy@gmail.com",
    username: "Jared",
    password: "password"
  },
  {
    email: "crism",
    username: "Cris",
    password: "password"
  },
  {
    email: "chrisb",
    username: "Chris",
    password: "password"
  },
  {
    email: "danw",
    username: "Dan",
    password: "password"
  }
];

const courseSeed = [
  {
    title: "LERN HTML",
    // category: { type: Schema.Types.ObjectId, ref: "Category" },
    // instructor: { type: Schema.Types.ObjectId, ref: "User" },
    users: [
      {
        // user: { type: Schema.Types.ObjectId, ref: "User" },
        currentPage: 10,
        dateStarted: "7/21/2020",
        dateCompleted: "7/27/2020"
      },
      {
        // user: { type: Schema.Types.ObjectId, ref: "User" },
        currentPage: 5,
        dateStarted: "7/26/2020"
      }
    ]
  }
];

// let userId;

db.Category.deleteMany({})
  .then(() => db.Category.collection.insertMany(catSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//   .then(
// db.Category.findOne({ category: "Full-Stack Development" })
//   .then(data => {
//     console.log(data);
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
//   );

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//   .then(
//     db.User.findOne({ username: "Jared" }).then(user => {
//       userId = user._id;
//       console.log(user);
//       process.exit(0);
//     })
//   )
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Course.deleteMany({})
  .then(() => db.Course.collection.insertMany(courseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
