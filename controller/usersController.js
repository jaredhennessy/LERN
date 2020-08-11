const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const mongoose = require("mongoose");
require("dotenv").config();
const generateAccessToken = require("../utils/generateAccessToken");
// *** REPLACE ALL INSTANCES OF CALLING refreshTokens
let refreshTokens = [];

function completeCourse(userCourseId) {
  const newDate = Date.now();
  User.findOneAndUpdate({ "courses._id": userCourseId },
    { $set: { "courses.$.dateCompleted": newDate } },
    { upsert: true })
    .exec((err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        return data;
      }
    })
}

module.exports = {
  findUser: function (req, res) {
    User.findOne({
      username: req.user.username
    }).then(data => {
      res.json({
        username: data.username,
        _id: data._id,
        image: data.image,
        email: data.email,
        dateCreated: data.dateCreated
      })
    }).catch(err => {
      console.log(err);
    })
  },

  createUser: async function (req, res) {
    const { username, password, email } = req.body;

    // Validate username/email doesn't already exist
    const existingUser = await User.findOne({ username: username });
    if (existingUser) return res.status(400).send("Username is taken.");
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) return res.status(400).send("Email has already been used.");

    try {
      // User password will be salted and hashed by bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with the username and HASHED password
      const newUser = {
        username: username,
        password: hashedPassword,
        email: email
      };

      User.create(newUser)
        .then(res.status(200).send())
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  },

  userLogin: async function (req, res) {
    // Find user in the database (*** REPLACE users WITH DATABASE)
    const user = await User.findOne({ username: req.body.username });

    // If no user, return bad response
    if (user == null) return res.status(400).send("User does not exist.");

    // Else, compare user supplied password to the hashed password; use bcrypt compare to avoid timing attacks
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = generateAccessToken(user);
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        res.send({
          accessToken: accessToken,
          refreshToken: refreshToken,
          username: user.username,
          userID: user._id,
          image: user.image,
          email: user.email,
          dateCreated: user.dateCreated
        });
      } else {
        res.status(400).send("Incorrect credentials");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  },

  findUserCourses: function (req, res) {
    // Return through courses and return courses where course owner matches username
    User.findOne({
      _id: req.params.id
    }).select("username email image courses dateCreated enrolled coursesEnrolled coursesInProgress coursesCompleted percentComplete coursesTaught")
      .populate([
        //   {
        //   path: "coursesTaughtDetails",
        //   model: "Course",
        //   select: "title"
        // }, 
        {
          path: "courses.Course",
          populate: [{
            path: "category",
            model: "Category",
            select: "category"
          }, {
            path: "instructor"
            , model: "Instructor"
            , select: "username email"
          }, {
            path: "pages",
            model: "Page",
            select: "pageNumber title text link image"
          }],
        }
      ]).then(data => {
        res.json(data);
      }).catch(err => {
        console.log(err);
      })
  },

  startCourse: function (req, res) {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const courseId = mongoose.Types.ObjectId(req.body.courseId);

    const query = [
      {
        "$match": { _id: userId }
      },
      { $unwind: "$courses" },
      { "$match": { "courses.Course": courseId } }
    ]
    User.aggregate(query).exec((err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        if (data.length === 0) {
          const userCourse = {
            "Course": courseId,
            "currentPage": 1,
            "dateCompleted": null
          }

          User.findOneAndUpdate({ _id: userId }, { $push: { courses: userCourse } }, { new: true })
            .then(res.json({
              msg: "New",
              currentPage: 1
            }))
            .catch(err => res.status(422).json(err))
        } else {
          res.json({
            msg: "Enrolled",
            currentPage: data[0].courses.currentPage
          });
        }
      }
    })

  },

  movePage: function (req, res) {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const courseId = mongoose.Types.ObjectId(req.body.courseId);

    const query = [
      {
        "$match": { _id: userId }
      },
      { $unwind: "$courses" },
      { "$match": { "courses.Course": courseId } }
    ]
    User.aggregate(query).exec((err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        const userCourseId = data[0].courses._id
        let newPage
        let dir = req.params.direction

        if (dir === "next" && data[0].courses.currentPage === req.body.endPage) {
          dir = "complete"
          newPage = data[0].courses.currentPage
          completeCourse(userCourseId)
        } else if (dir === "next") {
          newPage = data[0].courses.currentPage + 1
        } else if (dir === "prev" && data[0].courses.currentPage > 1) {
          newPage = data[0].courses.currentPage - 1
        } else {
          newPage = data[0].courses.currentPage
        }


        User.findOneAndUpdate({ "courses._id": userCourseId },
          { $set: { "courses.$.currentPage": newPage } },
          {
            upsert: true
            // ,
            // arrayFilters: [{ "courses._id": userCourseId }]
          })
          .exec((err, data) => {
            if (err) {
              console.log(err);
            }
            else {
              res.json({
                msg: dir,
                currentPage: newPage
              })
            }
          })
      }
    })
  },

  prevPage: function (req, res) {
    return req.params.id;

  },


  refreshToken: function (req, res) {
    // Validate the user token is not missing and still valid
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    // Verify token with JWT, if passes a new access token is generated for this user
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ username: user.username });
      res.json({ accessToken: accessToken });
    });
  },

  deleteToken: function (req, res) {
    // Remove the refresh token from the database (array for now)
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
  },

  tokenIsValid: async function (req, res) {
    try {
      // Check if token was sent
      const token = req.header("authorization");
      if (!token) return res.json(false);

      // Check the sent token is valid
      const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (!verified) return res.json(false);

      // Check the username is valid
      const user = await User.findOne({ username: verified.username });
      if (user == null) return res.json(false);

      // Return true if all check passed
      return res.json(true);
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  },

  uploadPicture: async function (req, res) {
    console.log(req.body._id)
    try {
      User.updateOne({ _id: mongoose.Types.ObjectId(req.body._id) }, { image: req.body.imageURL })
        .then(data => {
          res.json(data);
        }).catch(err => {
          console.log(err);
          res.status(400).send();
        })
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
};
