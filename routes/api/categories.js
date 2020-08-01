const router = require("express").Router();
const categoriesController = require("../../controller/categoriesController");

// Matches with "/api/categories", returns all courses in database (currently an array)
router.route("/")
    .get(categoriesController.findAll)

module.exports = router;