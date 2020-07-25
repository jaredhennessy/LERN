const router = require("express").Router();
const usersController = require("../../controller/usersController")

// Matches with "/api/users"
router.route("/")
  .get(usersController.find)
  .post(usersController.create)

module.exports = router;
