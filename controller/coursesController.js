const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Course.find(req.query)
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
