const router = require("express").Router();
const categoriesController = require("../../controller/categoriesController");

// Matches with "/api/categories", returns all categories in database
router.route("/")
    .get(categoriesController.findAll)

// Matches with "/api/categories", inserts a single document into the Category collection
router.route("/")
    .post(categoriesController.new)

// Matches with "/api/categories/<Category._id>", returns the course with the given _id
router.route("/:id")
    .get(categoriesController.findById)

// Matches with "/api/categories", updates a single document with the specified id in the Category collection
router.route("/:id")
    .put(categoriesController.update)

module.exports = router;