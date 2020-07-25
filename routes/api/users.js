const router = require("express").Router();
const usersController = require("../../controller/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  
// Matches with "/api/users/create"
router.route("/register")
  .post(usersController.createUser)

// Matches with "/api/users/login"  
router.route("/login")
  .post(usersController.userLogin)

module.exports = router;
