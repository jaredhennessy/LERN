const router = require("express").Router();
const coursesController = require("../../controller/coursesController");

// Matches with "/api/courses", returns all courses in database
router.route("/")
  .get(coursesController.findAll)

// Matches with "/api/courses", inserts a single document into the Course collection
router.route("/")
  .post(coursesController.new)

// Matches with "/api/courses/<Course._id>", returns the course with the given _id
router.route("/:id")
  .get(coursesController.findById)

// Matches with "/api/courses", updates a single document with the specified id in the Course collection
router.route("/:id")
  .put(coursesController.update)

// Matches with "/api/courses/cat/<Category._id>", returns the courses in the given category
router.route("/cat/:id")
  .get(coursesController.findByCategory)

// Matches with "/api/courses/i/<User._id>", returns the courses with the given intructor/creator
router.route("/i/:id")
  .get(coursesController.findByInstructor)

module.exports = router;