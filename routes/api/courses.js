const router = require("express").Router();
const coursesController = require("../../controller/coursesController");

// Matches with "/api/courses", returns all courses in database
router.route("/")
  .get(coursesController.findAll)

module.exports = router;