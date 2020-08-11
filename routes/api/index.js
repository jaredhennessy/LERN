const router = require("express").Router();
const userRoutes = require("./users");
const categoryRoutes = require("./categories");
const courseRoutes = require("./courses");
const fileRoutes = require("./files");
const pageRoutes = require("./pages");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);
router.use("/files", fileRoutes);
router.use("/pages", pageRoutes);

module.exports = router;
