const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const path = require("path");
const crypto = require("crypto");
const mongoConfig = require("../../utils/mongoConfig");
// const usersController = require("../../controller/usersController");
// const authenticateToken = require("../../utils/authenticateToken");

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
<<<<<<< HEAD
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
=======
        const filename = bug.toSTring("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketname: "uploads"
>>>>>>> 453df02d3d8b8399f834dd9c1d2fb32d4bff1909
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload", upload.single("file"), (req, res) => {
<<<<<<< HEAD
  console.log("POST");
  console.log(req.file);
  res.json({ file: req.file });
  // res.redirect('/');
});

router.get("/files", (req, res) => {
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
=======
  res.json({ file: req.file });
>>>>>>> 453df02d3d8b8399f834dd9c1d2fb32d4bff1909
});

module.exports = router;

// // file upload
// const DIR = "./public/";
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.toLowerCase().split(" ").join("-");
//     cb(null, uuidv4() + "-" + fileName);
//   }
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   }
// });

// // Add avatar image to user
// router.put("/fileUpload", upload.single("image"), (req, res, next) => {
<<<<<<< HEAD
//   console.log(req.image);
//   const url = req.protocol + "://" + req.get("host");
//   const user = {
//     _id: req.id,
//     image: url + "/public/" + req.image.name
//   };
//   user
//     .save()
//     .then(result => {
//       res.status(201).json({
//         message: "user image updated successfully",
//         userCreated: {
//           _id: result._id,
//           image: result.image
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err),
//         res.status(500).json({
//           error: err
//         });
//     });
// });

// router.post("/userTest", upload.single("profileImg"), (req, res, next) => {
//   const url = req.protocol + "://" + req.get("host");
//   const user = new User({
//     _id: new mongoose.Types.ObjectId(),
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//     profileImg: url + "/public/" + req.file.filename
//   });
//   user
//     .save()
//     .then(result => {
//       res.status(201).json({
//         message: "User registered successfully!",
//         userCreated: {
//           _id: result._id,
//           profileImg: result.profileImg
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err),
//         res.status(500).json({
//           error: err
//         });
//     });
// });
=======
//     console.log(req.image);
//     const url = req.protocol + "://" + req.get("host");
//     const user = {
//       _id: req.id,
//       image: url + "/public/" + req.image.name
//     };
//     user
//       .save()
//       .then(result => {
//         res.status(201).json({
//           message: "user image updated successfully",
//           userCreated: {
//             _id: result._id,
//             image: result.image
//           }
//         });
//       })
//       .catch(err => {
//         console.log(err),
//           res.status(500).json({
//             error: err
//           });
//       });
//   });

//   // router.post("/userTest", upload.single("profileImg"), (req, res, next) => {
//   //   const url = req.protocol + "://" + req.get("host");
//   //   const user = new User({
//   //     _id: new mongoose.Types.ObjectId(),
//   //     username: req.body.username,
//   //     password: req.body.password,
//   //     email: req.body.email,
//   //     profileImg: url + "/public/" + req.file.filename
//   //   });
//   //   user
//   //     .save()
//   //     .then(result => {
//   //       res.status(201).json({
//   //         message: "User registered successfully!",
//   //         userCreated: {
//   //           _id: result._id,
//   //           profileImg: result.profileImg
//   //         }
//   //       });
//   //     })
//   //     .catch(err => {
//   //       console.log(err),
//   //         res.status(500).json({
//   //           error: err
//   //         });
//   //     });
//   // });
>>>>>>> 453df02d3d8b8399f834dd9c1d2fb32d4bff1909
