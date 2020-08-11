const jwt = require('jsonwebtoken');

// Middleware to check the user token is valid
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Splitting Bearer TOKEN, token will be the second parameter, undefined if no authHeader
  const token = authHeader && authHeader.split(' ')[1];
  
  // Token not sent
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // Token exists but is no longer valid
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}