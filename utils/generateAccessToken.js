const jwt = require("jsonwebtoken");

module.exports = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" })
}