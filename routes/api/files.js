const router = require("express").Router();
const mongoose = require("mongoose");
const crypto = require("crypto");
const usersController = require("../../controller/usersController");
const authenticateToken = require("../../utils/authenticateToken");
const path = require("path");
const multer = require("multer");
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/lerndb";

// Init GridFs
const conn = mongoose.createConnection(mongoURI);
let gfs;
conn.once("open"),
  () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
  };

//Create Storage Engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = bug.toSTring("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketname: "uploads"
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
  res.json({ file: req.file });
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
