const router = require("express").Router();
const userRoutes = require("./users");
const coursesRoutes = require("./courses");

router.use("/users", userRoutes);
router.use("/courses", coursesRoutes);

module.exports = router;
