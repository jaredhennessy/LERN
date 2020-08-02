const router = require("express").Router();
const pagesController = require("../../controller/pagesController");

// Matches with "/api/pages", returns all pages in database
router.route("/")
    .get(pagesController.findAll)

module.exports = router;