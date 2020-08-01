const mongoose = require("mongoose");
const db = require("../models");
// const categories = require("./categories.js");
// const users = require("./users.js");
// const courses = require("./courses.js");
// const pages = require("./pages.js");

const categories = [
  new db.Category({
    "_id": "5f21fa5e4fadb841d8cb98f1",
    "category": "Finance"
  }),
  new db.Category(

    {
      "_id": "5f21fa5e4fadb841d8cb98f2",
      "category": "Business"
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f3",
      "category": "Math"
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f4",
      "category": "Painting"
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f5",
      "category": "Pottery"
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f6",
      "category": "Fishing"
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f7",
      "category": "DIY"
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f8",
      "category": "Full-Stack Development"
    })
]

const users = [
  new db.User({
    "_id": "5f23a9a351dd13002a69a3d0",
    "username": "jared",
    "password": "$2b$10$LwLKHgDZflWgrO9ujas0neOdRqIUZzxaQwAs6qBPmHUOs4IzGXtae",
    "email": "jared.hennessy@gmail.com",
    "courses": [
      {
        "Course": "5f25ccebd3c0eb0be44eef57",
        "currentPage": 1,
        "dateStarted": "2020-08-01T05:18:27.258Z",
        "dateCompleted": null
      },
      {
        "Course": "5f25ccebd3c0eb0be44eef58",
        "currentPage": 1,
        "dateStarted": "2020-07-31T05:18:27.258Z",
        "dateCompleted": "2020-08-01T05:18:27.258Z"
      }
    ]
  }),
  new db.User({
    "_id": "5f23bcad9c9c5d002a6ef390",
    "username": "newuser",
    "password": "$2b$10$fO8K1PNb.zt4xfJxQHs84uxBpU6.ga6bLMOwHcOfneuICLPcaLL.K",
    "email": "newuser@example.com",
    "courses": [
      {
        "Course": "5f25ccebd3c0eb0be44eef57",
        "currentPage": 1,
        "dateStarted": "2020-08-01T05:18:27.258Z",
        "dateCompleted": null
      },
      {
        "Course": "5f25ccebd3c0eb0be44eef58",
        "currentPage": 5,
        "dateStarted": "2020-07-31T05:18:27.258Z",
        "dateCompleted": "2020-08-01T05:18:27.258Z"
      }
    ]
  }),
  new db.User({
    "_id": "5f23bfaac3bfc2002aaee6c9",
    "username": "testuser",
    "password": "$2b$10$6WIKG6NJ5OlsfDCSCg37ledciJbWwBeVmeDBjef2BXh8i8I3q9Hc6",
    "email": "testuser@example.com",
    "courses": [
      {
        "Course": "5f25ccebd3c0eb0be44eef57",
        "currentPage": 1,
        "dateStarted": "2020-08-01T05:18:27.258Z",
        "dateCompleted": null
      },
      {
        "Course": "5f25ccebd3c0eb0be44eef58",
        "currentPage": 5,
        "dateStarted": "2020-07-31T05:18:27.258Z",
        "dateCompleted": "2020-08-01T05:18:27.258Z"
      }
    ]
  }),
  new db.User({
    "_id": "5f2482697ed203002a38cf8d",
    "username": "danw",
    "password": "$2b$10$5NYtYepOeWJ/o/r3FksFwOSmoS7OekArfK/EsvWjri7RNG4Wrmk.2",
    "email": "danmweikart@gmail.com",
    "courses": [
      {
        "Course": "5f25ccebd3c0eb0be44eef56",
        "currentPage": 1,
        "dateStarted": "2020-08-01T05:18:27.258Z",
        "dateCompleted": null
      },
      {
        "Course": "5f25ccebd3c0eb0be44eef58",
        "currentPage": 5,
        "dateStarted": "2020-07-31T05:18:27.258Z",
        "dateCompleted": "2020-08-01T05:18:27.258Z"
      }
    ]
  })]

const courses = [
  new db.Course({
    "_id": "5f25ccebd3c0eb0be44eef56",
    "title": "Course A",
    "description": "Suspendisse enim tortor, feugiat at lectus at, aliquam rhoncus nisl. Fusce ut ante in tortor pulvinar finibus. Duis ut libero diam. Nullam lobortis eros fringilla pellentesque elementum. Proin ut finibus erat, id efficitur libero. Vestibulum nec mollis orci. Suspendisse eu feugiat est. Quisque congue erat eget erat maximus consectetur. Vivamus bibendum interdum blandit. In varius sodales eros, vitae ultrices nisi dapibus sed. Maecenas mollis odio id felis auctor, id sodales augue feugiat. Sed eget justo elementum, lobortis urna quis, malesuada nunc. Cras gravida dignissim scelerisque. Nam cursus tincidunt dolor a pretium. Sed elementum, lacus sit amet porta efficitur, tellus enim consectetur massa, ac condimentum sapien velit nec turpis. Curabitur faucibus cursus dictum.",
    "category": "5f21fa5e4fadb841d8cb98f3",
    "instructor": "5f23a9a351dd13002a69a3d0"
  }),
  new db.Course({
    "_id": "5f25ccebd3c0eb0be44eef57",
    "title": "Course B",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt leo velit, maximus aliquam magna fringilla in. Maecenas dapibus massa sit amet suscipit aliquam. Maecenas dignissim vestibulum auctor. Phasellus at eros varius, dignissim augue ut, volutpat augue. Donec eu justo feugiat massa sagittis blandit. Ut et lectus odio. Donec vestibulum lorem vel rutrum hendrerit. Curabitur bibendum, enim finibus iaculis posuere, sem arcu egestas mi, at pellentesque erat tellus eget massa. Vestibulum congue feugiat felis. Aenean pulvinar elit vel mattis congue. Vivamus mi ex, aliquet quis urna sit amet, euismod elementum neque. Nam a lacinia mauris. Sed in neque sit amet mi imperdiet elementum. Mauris non enim eros.",
    "category": "5f21fa5e4fadb841d8cb98f7",
    "instructor": "5f2482697ed203002a38cf8d"
  }),
  new db.Course({
    "_id": "5f25ccebd3c0eb0be44eef58",
    "title": "Course C",
    "description": "Sed ex libero, pharetra fringilla condimentum nec, scelerisque eu dui. Curabitur malesuada, dui porta interdum commodo, est eros maximus massa, ut euismod sapien dui ut felis. Quisque vehicula arcu auctor, rhoncus elit et, blandit tellus. Praesent viverra dignissim magna, et convallis massa mollis sit amet. Nunc dignissim porta justo in ultrices. Suspendisse consequat tincidunt lectus. Nunc eget nulla in est interdum blandit. Aliquam eget hendrerit nunc. Aenean tristique, massa a consectetur faucibus, nunc erat ullamcorper velit, quis convallis elit nunc non ante. Nam interdum fermentum elementum. Mauris sapien ligula, luctus quis sapien non, imperdiet dictum urna. ",
    "category": "5f21fa5e4fadb841d8cb98f8",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  })
]

const pages = [
  new db.Page({
    "pageNumber": 1,
    "title": "Page 1",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://google.com",
    "course": "5f25ccebd3c0eb0be44eef56"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page 2",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://google.com",
    "course": "5f25ccebd3c0eb0be44eef56"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page 3",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://google.com",
    "course": "5f25ccebd3c0eb0be44eef56"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page 4",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://google.com",
    "course": "5f25ccebd3c0eb0be44eef56"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page 5",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://google.com",
    "course": "5f25ccebd3c0eb0be44eef56"
  }),
  new db.Page({
    "pageNumber": 1,
    "title": "Page 1",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://bing.com",
    "course": "5f25ccebd3c0eb0be44eef57"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page 2",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://bing.com",
    "course": "5f25ccebd3c0eb0be44eef57"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page 3",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://bing.com",
    "course": "5f25ccebd3c0eb0be44eef57"

  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page 4",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://bing.com",
    "course": "5f25ccebd3c0eb0be44eef57"

  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page 5",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://bing.com",
    "course": "5f25ccebd3c0eb0be44eef57"

  }),
  new db.Page({
    "pageNumber": 1,
    "title": "Page 1",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://duckduckgo.com",
    "course": "5f25ccebd3c0eb0be44eef58"

  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page 2",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://duckduckgo.com",
    "course": "5f25ccebd3c0eb0be44eef58"

  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page 3",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://duckduckgo.com",
    "course": "5f25ccebd3c0eb0be44eef58"

  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page 4",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://duckduckgo.com",
    "course": "5f25ccebd3c0eb0be44eef58"

  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page 5",
    "text": "Pellentesque vehicula, felis quis sollicitudin aliquet, neque magna blandit odio, eget malesuada dolor libero sit amet ligula. Nam iaculis orci elementum risus porta, at commodo felis ultricies. Quisque eget lectus consequat, tempor est ut, viverra eros. Nunc sed tellus id neque volutpat dignissim. Duis blandit magna quis accumsan lobortis. Suspendisse fermentum ex nec tortor pretium, sit amet scelerisque erat vehicula. Phasellus congue lectus a dictum dapibus. Etiam metus nisi, luctus vitae finibus volutpat, imperdiet non nisi. Curabitur sagittis leo sit amet diam accumsan, vel condimentum tortor venenatis. Curabitur lacinia ligula id enim volutpat elementum. Praesent ut ipsum sed urna ultricies vulputate.",
    "link": "https://duckduckgo.com",
    "course": "5f25ccebd3c0eb0be44eef58"

  })
]

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lerndb",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) throw err;
  }
).then(() => db.Category.deleteMany({})
).then(() => db.Category.collection.insertMany(categories)
).then(() => db.User.deleteMany({})
).then(() => db.User.collection.insertMany(users)
).then(() => db.Course.deleteMany({})
).then(() => db.Course.collection.insertMany(courses)
).then(() => db.Page.deleteMany({})
).then(() => db.Page.collection.insertMany(pages)
).then(() => {
  console.log("documents inserted");
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});


