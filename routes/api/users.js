const router = require("express").Router();
const usersController = require("../../controller/usersController");
const authenticateToken = require("../../utils/authenticateToken");

// Matches with "/api/users", returns all registered users in database
router.route("/").get(usersController.findAll);

// Matches with "/api/users/:id", authenticates for valid token, then returns courses with token user
router.route("/:id").get(authenticateToken, usersController.findUserCourses);

// Matches with "/api/users/create", creates a username with hashed password in database
router.route("/register").post(usersController.createUser);

// Matches with "/api/users/login", creates Access/Refresh Token
router.route("/login").post(usersController.userLogin);

// Matches with "/api/users/token", refreshes AccessToken
router.route("/token").post(usersController.refreshToken);

// Matches with "/api/users/login", deletes RefreshToken
router.route("/logout").delete(usersController.deleteToken);

module.exports = router;
