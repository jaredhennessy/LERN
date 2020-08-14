const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const path = require("path");
const crypto = require("crypto");
const mongoConfig = require("../../utils/mongoConfig");
// const filesController = require("../../controller/filesController");

// Init grid file system (GridFS)
let gfs;

mongoose.connection.once("open", () => {
  // Init filestream
  gfs = Grid(mongoose.connection.db, mongoose.mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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
});

// Matches with "/api/files", returns all files in database
router.get("/", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if what's returned is a file
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist"
      });
    }

    // Files exist
    return res.json(files);
  });
});

// Matches with "/api/files/<filename>", returns a specific image
router.get("/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists"
      });
    }

    // Check if the file is an image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image"
      });
    }
  });
});

module.exports = router;
