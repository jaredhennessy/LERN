const router = require("express").Router();
const categoriesController = require("../../controller/categoriesController");

// Matches with "/api/categories", returns all categories in database
router.route("/")
    .get(categoriesController.findAll)

module.exports = router;