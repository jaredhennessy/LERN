const router = require("express").Router();
const usersController = require("../../controller/usersController");
const authenticateToken = require("../../utils/authenticateToken");

// Matches with "/api/users", authenticates for valid token, returns current logged in user
router.route("/").get(authenticateToken, usersController.findUser);

// Matches with "/api/users/courses/:id", then returns courses with token user
router.route("/courses/:id").get(usersController.findUserCourses);

// Matches with "/api/users/courses/start/:id", then reads & updates the courses field in the User model
router.route("/start").put(usersController.startCourse);

// Matches with "/api/users/move/:direction", then updates the pageNumber field in the courses array of the User model in the specified direction
router.route("/move/:direction").put(usersController.movePage);

// Matches with "/api/users/register", creates a username with hashed password in database (currently array)
router.route("/register").post(usersController.createUser);

// Matches with "/api/users/login", creates Access/Refresh Token
router.route("/login").post(usersController.userLogin);

// Matches with "/api/users/token", refreshes AccessToken
router.route("/token").post(usersController.refreshToken);

// Matches with "/api/users/logout", deletes RefreshToken
router.route("/logout").delete(usersController.deleteToken);

// Matches with "/api/users/checkToken", returns boolean if user token is valid
router.route("/checkToken").post(usersController.tokenIsValid);

// Matches with "/api/users/uploadPicture", returns boolean if user token is valid
router.route("/uploadPicture").put(usersController.uploadPicture);

module.exports = router;
