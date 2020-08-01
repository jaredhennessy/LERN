const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const path = require("path");
const crypto = require("crypto");
const mongoConfig = require("../../utils/mongoConfig");
// const filesController = require("../../controller/filesController");

// Init gfs
let gfs;

mongoose.connection.once("open", () => {
  // Init stream
  gfs = Grid(mongoose.connection.db, mongoose.mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoConfig.mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
  console.log("POST");
  console.log(req.file);
  res.json({ file: req.file });
  // res.redirect('/');
});

router.get("/", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist"
      });
    }

    // Files exist
    return res.json(files);
  });
});

module.exports = router;
