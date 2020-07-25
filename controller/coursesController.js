const courses = [
  {
    "title": "LERN HTML",
    "owner": "Chris",
    "description": "Learn the basics of HTML"
  },
  {
    "title": "LERN CSS",
    "owner": "Jared",
    "description": "Learn the basics of CSS"
  },
  {
    "title": "LERN JS",
    "owner": "Dan",
    "description": "Learn the basics of Javascript"
  },
  {
    "title": "LERN jQuery",
    "owner": "Cristian",
    "description": "Learn the basics of jQuery"
  }
];

module.exports = {
  findAll: function(req, res) {
    res.json(courses);
  },
}