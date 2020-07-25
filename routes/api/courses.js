const router = require("express").Router();
const coursesController = require("../../controller/coursesController");

// Matches with "/api/courses"
router.route("/")
  .get(coursesController.findAll)

module.exports = router;