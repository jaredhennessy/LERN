const jwt = require("jsonwebtoken");

module.exports = (user) => {
  // Access token expires after 10 minutes
  return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)
}