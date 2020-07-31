const router = require("express").Router();
const userRoutes = require("./users");
const courseRoutes = require("./courses");
const fileRoutes = require("./files");

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/files", fileRoutes);

module.exports = router;
