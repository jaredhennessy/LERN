const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
require("dotenv").config();
const generateAccessToken = require("../utils/generateAccessToken");

// *** REPLACE ALL INSTANCES OF CALLING refreshTokens
let refreshTokens = [];

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ username: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: async function (req, res) {
    const { username, password, passwordCheck, email } = req.body;

    // Validate required fields, password length, passwords match
    if (!email || !password || !passwordCheck || !username)
      return res.status(400).json({ msg: "Missing required fields." });
    if (password !== passwordCheck)
      return res.status(400).json({ msg: "Passwords do not match." });
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password needs to be at least 6 characters." });

    // *** REPLACE WITH CHECK TO DATABASE, Validate username/email doesn't already exist
    if (!!users.find(user => user.username === username))
      return res.status(400).json({ msg: "Username is taken." });
    if (!!users.find(user => user.email === email))
      return res.status(400).json({ msg: "Email has already been used." });

    try {
      // User password will be salted and hashed by bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with the username and HASHED password
      const newUser = new User({
        username: username,
        password: hashedPassword,
        email: email
      });

      newUser.save(function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  },
  userLogin: async function (req, res) {
    // Find user in the database (*** REPLACE users WITH DATABASE)
    const user = db.User.findOne({ username: req.body.username });
    console.log(user);

    // If no user, return bad response
    if (user == null) {
      return res.status(400).send("Incorrect credentials");
    }

    // Else, compare user supplied password to the hashed password; use bcrypt compare to avoid timing attacks
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        res.send({ accessToken: accessToken, refreshToken: refreshToken });
      } else {
        res.status(400).send("Incorrect credentials");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  },
  findUserCourses: function (req, res) {
    // Search through courses and return courses where course owner matches username
    res.json(courses.filter(course => course.owner === req.user.username));
  },
  refreshToken: function (req, res) {
    // Validate the user token is not missing and still valid
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    // Verify token with JWT, if passes a new acess token is generated for this user
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
  }
};
