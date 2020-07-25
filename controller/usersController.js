const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateAccessToken = require("../utils/generateAccessToken");

// REPLACE WITH DATABASE IN FUTURE
const users = [];
const courses = [
  {
    title: "LERN HTML",
    owner: "Chris",
    description: "Learn the basics of HTML"
  },
  {
    title: "LERN CSS",
    owner: "Jared",
    description: "Learn the basics of CSS"
  },
  {
    title: "LERN JS",
    owner: "Dan",
    description: "Learn the basics of Javascript"
  },
  {
    title: "LERN jQuery",
    owner: "Cristian",
    description: "Learn the basics of jQuery"
  }
];
let refreshTokens = [];

module.exports = {
  findAll: function(req, res) {
    res.json(users);
  },
  createUser: async function(req, res) {
    try {
      // User password will be salted and hashed by bcrypt
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create a new user with the username and HASHED password
      const newUser = { name: req.body.name, password: hashedPassword }

      // Push to database (array for now), send success status
      users.push(newUser);
      res.status(201).send();
    } catch(err) {
      console.log(err);
      res.status(500).send();
    }
  },
  userLogin: async function(req, res) {
    // Find user in the database (REPLACE users WITH DATABASE)
    const user = users.find(user => user.name === req.body.name); 

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
    } catch(err) {
      console.log(err);
      res.status(500).send();
    }
  },
  findUserCourses: function(req, res) {
    res.json(courses.filter(course => course.owner === req.user.name));
  },
  refreshToken: function(req, res) {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ name: user.name});
      res.json({ accessToken: accessToken });
    })
  },
  deleteToken: function(req, res) {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
  }
}