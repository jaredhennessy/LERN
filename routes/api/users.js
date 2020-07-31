const router = require("express").Router();
const multer = require("multer");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const usersController = require("../../controller/usersController");
const authenticateToken = require("../../utils/authenticateToken");

// file upload
const DIR = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});

// Matches with "/api/users", returns current logged in user
router.route("/").get(authenticateToken, usersController.findUser);

// Matches with "/api/users/:id", authenticates for valid token, then returns courses with token user
router.route("/:id").get(authenticateToken, usersController.findUserCourses);

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

// Add avatar image to user
router.put("/fileUpload", upload.single("image"), (req, res, next) => {
  console.log(req.image);
  const url = req.protocol + "://" + req.get("host");
  const user = {
    _id: req.id,
    image: url + "/public/" + req.image.name
  };
  user
    .save()
    .then(result => {
      res.status(201).json({
        message: "user image updated successfully",
        userCreated: {
          _id: result._id,
          image: result.image
        }
      });
    })
    .catch(err => {
      console.log(err),
        res.status(500).json({
          error: err
        });
    });
});

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

module.exports = router;
