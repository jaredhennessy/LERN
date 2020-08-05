const router = require("express").Router();
const usersController = require("../../controller/usersController");
const authenticateToken = require("../../utils/authenticateToken");

// Matches with "/api/users", authenticates for valid token, returns current logged in user
router.route("/").get(authenticateToken, usersController.findUser);

// Matches with "/api/users/courses/:id", then returns courses with token user
router.route("/courses/:id").get(usersController.findUserCourses);

// Matches with "/api/users/courses/start/:id", then reads & updates the courses field in the User model
router.route("/start").put(usersController.startCourse);

// Matches with "/api/users/courses/complete/:id", then reads & updates the courses field in the User model
router.route("/courses/:id/complete/").put(usersController.completeCourse);

// Matches with "/api/users/courses/next/:id", then reads & updates the courses field in the User model
router.route("/courses/:id/next/").put(usersController.nextPage);

// Matches with "/api/users/courses/prev/:id", then reads & updates the courses field in the User model
router.route("/courses/:id/prev/").put(usersController.prevPage);

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

module.exports = router;
