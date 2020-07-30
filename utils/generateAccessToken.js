const jwt = require("jsonwebtoken");

module.exports = (user) => {
  // Access token expires after 10 minutes
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "600s" })
}