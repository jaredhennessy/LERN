const users = [];

module.exports = {
  find: function(req, res) {
    res.json(users);
  },
  create: function(req, res) {
    users.push(req.body);
    res.json(users);
  }
}