const router = require("express").Router();
const pagesController = require("../../controller/pagesController");

// Matches with "/api/pages", returns all pages in database
router.route("/")
    .get(pagesController.findAll)

// Matches with "/api/pages", inserts a single document into the Page collection
router.route("/")
    .post(pagesController.new)

// Matches with "/api/pages/multi", inserts an array of documents into the Page collection
router.route("/multi")
    .post(pagesController.newArray)

// Matches with "/api/pages/<Page._id>", returns the page with the given _id
router.route("/:id")
    .get(pagesController.findById)

// Matches with "/api/pages", updates a single document with the specified id in the Page collection
router.route("/:id")
    .put(pagesController.update)

// Matches with "/api/pages/c/<Course._id>", returns the pages in the given course
router.route("/c/:id")
    .get(pagesController.findByCourse)

// Matches with "/api/pages/c/<Course._id>", returns the page with the specified pageNumber in the given course
router.route("/c/:id/p/:page")
    .get(pagesController.findByCoursePage)

module.exports = router;