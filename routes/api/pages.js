const router = require("express").Router();
const pagesController = require("../../controller/pagesController");

// Matches with "/api/pages", returns all courses in database (currently an array)
router.route("/")
    .get(pagesController.findAll)

module.exports = router;