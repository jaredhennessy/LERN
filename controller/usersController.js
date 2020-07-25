const users = [];
const bcrypt = require("bcrypt");

module.exports = {
  find: function(req, res) {
    res.json(users);
  },
  create: function(req, res) {
    users.push(req.body);
    res.status(201).send(users);
  }
}