const mongoose = require("mongoose");
const db = require("../models");

const categories = [
  new db.Category({
    "_id": "5f21fa5e4fadb841d8cb98f1",
    "category": "Arts & Crafts",
    "image": "c956d7ba05db84cddadd92e3b4e4ae91.jpg"
  }),
  new db.Category(

    {
      "_id": "5f21fa5e4fadb841d8cb98f2",
      "category": "Business & Finance",
      "image": ""
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f3",
      "category": "DIY",
      "image": ""
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f4",
      "category": "Food & Drink",
      "image": ""
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f5",
      "category": "History",
      "image": ""
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f6",
      "category": "Nature",
      "image": ""
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f7",
      "category": "Sports & Athletics",
      "image": ""
    }),
  new db.Category(
    {
      "_id": "5f21fa5e4fadb841d8cb98f8",
      "category": "STEM",
      "image": ""
    })
]

const users = [
  new db.User({
    "_id": "5f23a9a351dd13002a69a3d0",
    "username": "Jared",
    "password": "$2b$10$W3uCbM98tVCxY51SSPzo8us743lrgjC0CAsWz0r7WX2BuDdNgOMCO",
    "email": "jared@lern.org",
    "image": "186114a74af64e7555cb77fc7e02db21.jpg"
    // ,
    // "courses": [
    //   {
    //     "Course": "",
    //     "currentPage": 1,
    //     "dateStarted": "2020-08-01T05:18:27.258Z",
    //     "dateCompleted": null
    //   }
    // ]
  }),
  new db.User({
    "_id": "5f23bcad9c9c5d002a6ef390",
    "username": "Chris",
    "password": "$2b$10$W3uCbM98tVCxY51SSPzo8us743lrgjC0CAsWz0r7WX2BuDdNgOMCO",
    "email": "chris@lern.org",
    "image": "186114a74af64e7555cb77fc7e02db21.jpg"
  }),
  new db.User({
    "_id": "5f23bfaac3bfc2002aaee6c9",
    "username": "Cristian",
    "password": "$2b$10$W3uCbM98tVCxY51SSPzo8us743lrgjC0CAsWz0r7WX2BuDdNgOMCO",
    "email": "cristian@lern.org",
    "image": "186114a74af64e7555cb77fc7e02db21.jpg"
  }),
  new db.User({
    "_id": "5f2482697ed203002a38cf8d",
    "username": "Dan",
    "password": "$2b$10$W3uCbM98tVCxY51SSPzo8us743lrgjC0CAsWz0r7WX2BuDdNgOMCO",
    "email": "dan@lern.org",
    "image": "186114a74af64e7555cb77fc7e02db21.jpg"
  })
]

const courses = [
  new db.Course({
    "_id": "5f3218257ac5c82ba75fb590",
    "title": "Sewing",
    "description": "Jujubes tart sweet gummi bears caramels ice cream pie halvah. Chocolate bar marshmallow cupcake biscuit.",
    "image": "7d231f151a1bedcbb06a9b0da665223b.jpg",
    "category": "5f21fa5e4fadb841d8cb98f1",
    "instructor": "5f23a9a351dd13002a69a3d0"
  }),
  new db.Course({
    "_id": "5f32182e74aa40975f9955d9",
    "title": "Pottery",
    "description": "Cotton candy gummies biscuit dessert sesame snaps topping. Caramels ice cream liquorice powder.",
    "image": "e87860a04027b20414396d5c782af113.jpg",
    "category": "5f21fa5e4fadb841d8cb98f1",
    "instructor": "5f23a9a351dd13002a69a3d0"
  })
  ,
  new db.Course({
    "_id": "5f321831d50c072b3b9dfc5a",
    "title": "Sketching",
    "description": "Danish cookie pastry sugar plum lemon drops carrot cake muffin pudding. Sugar plum chocolate.*",
    "image": "cf448c0d45b869c5a541a27b789f4f2f.jpg",
    "category": "5f21fa5e4fadb841d8cb98f1",
    "instructor": "5f23a9a351dd13002a69a3d0"
  }),

  new db.Course({
    "_id": "5f321837f2c495ef0ab9d76a",
    "title": "Financial Reporting",
    "description": "Pastry muffin chupa chups icing liquorice powder cake. Topping lemon drops halvah tootsie roll.*",
    "image": "691c6a6b75964e9aac4c9b13ea864b3d.jpg",
    "category": "5f21fa5e4fadb841d8cb98f2",
    "instructor": "5f23a9a351dd13002a69a3d0"
  }),
  new db.Course({
    "_id": "5f32183b287495fd1b793c27",
    "title": "Conducting Meetings",
    "description": "Bear claw fruitcake sweet roll tiramisu. Cake liquorice pudding fruitcake bear claw sesame snaps powder.",
    "image": "e436cb95561c89f3121fb85514b7422c.jpg",
    "category": "5f21fa5e4fadb841d8cb98f2",
    "instructor": "5f23a9a351dd13002a69a3d0"
  }),
  new db.Course({
    "_id": "5f32183fedbd18c82583d148",
    "title": "Investments",
    "description": "Cotton candy lollipop biscuit ice cream dragée cheesecake.",
    "image": "77a3655a1a318911b8837f5ad6da2e5e.jpg",
    "category": "5f21fa5e4fadb841d8cb98f2",
    "instructor": "5f23a9a351dd13002a69a3d0"
  }),

  new db.Course({
    "_id": "5f32184876db89b4fdc93f78",
    "title": "House Painting",
    "description": "Jelly beans dragée donut tart tiramisu.*",
    "image": "0abd826448c9888ff6ce0018c4ff6c0a.jpg",
    "category": "5f21fa5e4fadb841d8cb98f3",
    "instructor": "5f23bcad9c9c5d002a6ef390"
  }),
  new db.Course({
    "_id": "5f32184cd50b1bbe2e715913",
    "title": "Home Repairs",
    "description": "Jelly lemon drops toffee biscuit macaroon cookie gummi bears. Apple pie pudding cotton candy.",
    "image": "2acd23c51d2c8d5d16f57ceae0b96b4d.jpg",
    "category": "5f21fa5e4fadb841d8cb98f3",
    "instructor": "5f23bcad9c9c5d002a6ef390"
  }),
  new db.Course({
    "_id": "5f32184ff121842986bc725c",
    "title": "Homemade Decor",
    "description": "Apple pie sesame snaps gummies lemon drops icing cake apple pie apple pie liquorice. Ice cream jelly dessert dragée macaroon.",
    "image": "5effa5bbbfd06017cea9854ffe8a899b.jpg",
    "category": "5f21fa5e4fadb841d8cb98f3",
    "instructor": "5f23bcad9c9c5d002a6ef390"
  }),

  new db.Course({
    "_id": "5f32189045fbb6931e97b3f3",
    "title": "Breakfasts of Champions",
    "description": "Oat cake jelly chocolate biscuit gummies cotton candy candy. Muffin sugar plum gummies marshmallow soufflé.*",
    "image": "6f044796958c5c235db6a5859105116c.jpg",
    "category": "5f21fa5e4fadb841d8cb98f4",
    "instructor": "5f23bcad9c9c5d002a6ef390"
  }),
  new db.Course({
    "_id": "5f3218946c20e92f045e318e",
    "title": "Wine Pairings",
    "description": "Chupa chups wafer oat cake sweet roll gummies tart tootsie roll bonbon.",
    "image": "50f9f4b78c682d9c07fc1f76f9a401eb.jpg",
    "category": "5f21fa5e4fadb841d8cb98f4",
    "instructor": "5f23bcad9c9c5d002a6ef390"
  }),
  new db.Course({
    "_id": "5f32189845a6804cfb144dda",
    "title": "Baking",
    "description": "Oat cake gummi bears pastry caramels. Jelly liquorice tiramisu. Gummi bears candy canes cake.",
    "image": "74a13aa44a24e03c4a1249261f331aef.jpg",
    "category": "5f21fa5e4fadb841d8cb98f4",
    "instructor": "5f23bcad9c9c5d002a6ef390"
  }),

  new db.Course({
    "_id": "5f32189b6e9252cb3cf4fffc",
    "title": "Civil Disobedience",
    "description": "Carrot cake ice cream cotton candy sweet roll topping bear claw tiramisu jelly chocolate cake.*",
    "image": "85efa8aed745dcb167fbd22ee3789d7f.jpg",
    "category": "5f21fa5e4fadb841d8cb98f5",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  }),
  new db.Course({
    "_id": "5f32189f2b8b27ad63d4488d",
    "title": "High-Altitude Construction",
    "description": "Tootsie roll cheesecake jelly beans cupcake marzipan powder tootsie roll bear claw biscuit.",
    "image": "fc5729caddbf07af3e95918581c61c8d.jpg",
    "category": "5f21fa5e4fadb841d8cb98f5",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  }),
  new db.Course({
    "_id": "5f3218a20b8dcfbe721afca0",
    "title": "Classical Architecture",
    "description": "Apple pie pie wafer gummies toffee icing. Gingerbread cake topping pastry lollipop dessert. ",
    "image": "581de1b78518cc246be146bfe3fc942e.jpg",
    "category": "5f21fa5e4fadb841d8cb98f5",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  }),

  new db.Course({
    "_id": "5f3218a79fb53ab78fa20be6",
    "title": "Plant Identification",
    "description": "Gingerbread jelly beans tiramisu gingerbread apple pie marzipan gingerbread.*",
    "image": "3220c76c02feecd4ab29d2a2ab115f00.jpg",
    "category": "5f21fa5e4fadb841d8cb98f6",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  }),
  new db.Course({
    "_id": "5f3218aadb0f9aed43046822",
    "title": "Rock Formations",
    "description": "Cake halvah pudding caramels. Halvah macaroon cake toffee wafer sesame snaps lollipop lemon drops.",
    "image": "eef31cd8ade238a71653803ed5f275e5.jpg",
    "category": "5f21fa5e4fadb841d8cb98f6",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  }),
  new db.Course({
    "_id": "5f3218ae472e55eac38905c2",
    "title": "Tree Canopies",
    "description": "Tootsie roll tart macaroon ice cream. Halvah sweet jujubes donut chocolate bar brownie.",
    "image": "bd17fdab7b90ae6cc87c7ae93389d6e0.jpg",
    "category": "5f21fa5e4fadb841d8cb98f6",
    "instructor": "5f23bfaac3bfc2002aaee6c9"
  }),

  new db.Course({
    "_id": "5f3218b3903411d48b2eab1e",
    "title": "Running",
    "description": "Cheesecake oat cake topping biscuit macaroon. Caramels soufflé topping. Fruitcake chocolate cake sugar.*",
    "image": "ee754b671ef6b763a1570b5eeaa6748d.jpg",
    "category": "5f21fa5e4fadb841d8cb98f7",
    "instructor": "5f2482697ed203002a38cf8d"
  }),
  new db.Course({
    "_id": "5f3218b70f1aea1a6f0ef82f",
    "title": "Yoga",
    "description": "Gummi bears candy dessert chocolate cake cheesecake cotton candy chupa chups cookie dessert.",
    "image": "110b1fe00c57fcd614d7adc66d276aa4.jpg",
    "category": "5f21fa5e4fadb841d8cb98f7",
    "instructor": "5f2482697ed203002a38cf8d"
  }),
  new db.Course({
    "_id": "5f3218ba83142f2ccc0480aa",
    "title": "Pigskin",
    "description": "Oat cake sweet roll fruitcake chocolate cake marzipan icing.",
    "image": "41159ca00538f3ba9b36c10f60bae777.jpg",
    "category": "5f21fa5e4fadb841d8cb98f7",
    "instructor": "5f2482697ed203002a38cf8d"
  }),

  new db.Course({
    "_id": "5f3218bf4cd14dbcb79b43b3",
    "title": "Outer Space",
    "description": "Croissant macaroon cookie jelly marzipan chupa chups cookie. Lollipop gummi bears danish lemon.*",
    "image": "beb58d0d68cef6808ee3efd476498ef6.jpg",
    "category": "5f21fa5e4fadb841d8cb98f8",
    "instructor": "5f2482697ed203002a38cf8d"
  }),
  new db.Course({
    "_id": "5f3218c3b7104a5cbd18daba",
    "title": "Circuitry",
    "description": "Brownie halvah pudding pudding cookie sweet roll toffee lemon drops.",
    "image": "9d2d82b9609477306c2af41c168fed21.jpg",
    "category": "5f21fa5e4fadb841d8cb98f8",
    "instructor": "5f2482697ed203002a38cf8d"
  }),
  new db.Course({
    "_id": "5f3218c74b54170d962c6220",
    "title": "Robotics",
    "description": "Toffee gummi bears pastry jujubes powder powder soufflé powder. Lemon drops cupcake ice cream oat cake. ",
    "image": "79764fd533497702165139b6ea038db1.jpg",
    "category": "5f21fa5e4fadb841d8cb98f8",
    "instructor": "5f2482697ed203002a38cf8d"
  })
]

const pages = [
  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "48024b453b028b1db055e1bdc35a390e.jpg",
    "text": "Carrot cake jelly-o apple pie cotton candy. Fruitcake powder gummi bears sweet roll toffee croissant cake pastry pastry. Fruitcake pastry chocolate bar candy jelly liquorice biscuit macaroon. Apple pie macaroon caramels pastry carrot cake cupcake. Sugar plum chupa chups gingerbread cake. Pudding bonbon bear claw sweet roll apple pie chupa chups carrot cake gummies.",
    "link": "",
    "course": "5f321831d50c072b3b9dfc5a"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "0f63f6329bfd6aee0981620bf7ffabd4.jpg",
    "text": "Danish cake caramels chupa chups brownie liquorice sesame snaps chocolate bar. Ice cream cheesecake candy brownie bonbon. Gummies danish dragée jelly chocolate cake pastry pudding. Chocolate bar donut candy canes. Jelly beans lemon drops jelly chocolate cake toffee. Marshmallow toffee marshmallow. Tart oat cake sesame snaps brownie. Dessert biscuit lemon drops jelly beans cake sweet sesame snaps danish.",
    "link": "",
    "course": "5f321831d50c072b3b9dfc5a"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "1ae1b8b202f7481dbdf1d9a33827106e.jpg",
    "text": "Gummies wafer candy canes cake cotton candy muffin lemon drops chupa chups. Danish cupcake cheesecake candy fruitcake sweet gummi bears brownie. Wafer jujubes sesame snaps ice cream apple pie macaroon. Carrot cake chocolate cake macaroon gummi bears fruitcake cotton candy oat cake biscuit. Pastry oat cake brownie tootsie roll wafer jelly sugar plum jelly-o cheesecake. Caramels toffee jelly-o bear claw donut sugar plum chocolate cake brownie. Halvah pie icing bear claw sesame snaps.",
    "link": "",
    "course": "5f321831d50c072b3b9dfc5a"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "977c6fb01ee3ca7d2f5faf0f398abee2.jpg",
    "text": "Sweet roll cheesecake croissant sweet fruitcake tiramisu. Liquorice croissant jujubes bonbon danish jujubes icing gummi bears jelly. Powder candy canes danish fruitcake candy canes macaroon chupa chups. Tiramisu candy candy jelly beans topping lemon drops. Sugar plum caramels fruitcake danish. Dragée liquorice lollipop sugar plum cake caramels. Gummi bears dragée jelly beans.",
    "link": "",
    "course": "5f321831d50c072b3b9dfc5a"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "a70de4d4a5d2e154ecc147275f33c829.jpg",
    "text": "Halvah caramels pudding chocolate soufflé carrot cake gummi bears. Jujubes carrot cake caramels jelly-o jelly. Sweet roll marshmallow gummies. Sweet roll halvah candy lollipop carrot cake bear claw chocolate bar. Dessert jelly beans liquorice. Soufflé halvah cake apple pie sweet chocolate bar sweet roll lemon drops. Gingerbread croissant lollipop danish dragée. Croissant sesame snaps tootsie roll soufflé wafer. Topping chocolate sweet roll dessert chocolate cake wafer tart muffin chupa chups. Cheesecake cheesecake soufflé cookie dragée.",
    "link": "",
    "course": "5f321831d50c072b3b9dfc5a"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "6ba8a7ce4d7c483bb619e589de056557.jpg",
    "text": "Jujubes tootsie roll marshmallow lemon drops caramels. Apple pie chupa chups lemon drops. Candy cupcake muffin dessert gingerbread sweet. Candy biscuit tart lemon drops apple pie tiramisu. Lemon drops lemon drops dessert oat cake. Macaroon candy canes croissant pastry donut topping brownie jelly. Chocolate bar sesame snaps pastry carrot cake. Bonbon danish dragée sesame snaps pastry icing biscuit tart icing. Pudding gummi bears chocolate cake gingerbread donut. Chocolate caramels topping tart marzipan biscuit topping.",
    "link": "",
    "course": "5f321837f2c495ef0ab9d76a"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "53aff51c766f0b6f5528cd7d051ec96c.jpg",
    "text": "Soufflé apple pie fruitcake jelly. Oat cake powder ice cream chocolate chocolate bar lemon drops. Marzipan icing chocolate halvah cookie chocolate bar liquorice jelly. Liquorice candy pastry candy chocolate bar pudding donut. Cheesecake sesame snaps pudding tart jujubes marshmallow chocolate tiramisu jelly-o. Tart fruitcake lemon drops jujubes icing tootsie roll chocolate tiramisu. Cupcake marzipan marzipan marzipan.",
    "link": "",
    "course": "5f321837f2c495ef0ab9d76a"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "a6a0a85c72866d4af57b5c4f107a7dc5.jpg",
    "text": "Pudding tart carrot cake bonbon topping apple pie toffee. Macaroon pie toffee lollipop topping muffin bear claw powder donut. Jelly beans tart pastry jelly beans gummi bears cupcake donut. Jelly-o cookie marshmallow ice cream pie pudding powder jujubes. Candy donut dessert cake. Cake gummies gummi bears chupa chups cake carrot cake. Brownie muffin dragée candy canes. Dessert bonbon carrot cake lemon drops. Macaroon chocolate cake pudding wafer pudding cotton candy. Toffee powder gummi bears oat cake.",
    "link": "",
    "course": "5f321837f2c495ef0ab9d76a"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "56dee146d943605761df0e23a763939e.jpg",
    "text": "Topping fruitcake dragée gummies muffin fruitcake. Ice cream candy canes dragée chupa chups carrot cake. Candy canes tart ice cream. Danish muffin soufflé soufflé halvah gummi bears marshmallow powder tart. Tiramisu marzipan cake candy. Lemon drops gummi bears pie powder dragée jelly chocolate cake bonbon cotton candy. Topping candy canes sweet roll danish croissant biscuit gingerbread. Gingerbread macaroon jelly beans. Macaroon tiramisu powder. Bonbon candy lollipop.",
    "link": "",
    "course": "5f321837f2c495ef0ab9d76a"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "d411257ae6c01ac3f5aeaf6fb1f58237.jpg",
    "text": "Toffee marzipan dragée ice cream sweet macaroon. Chocolate bar chocolate cake brownie pie. Gummi bears halvah pudding oat cake chocolate cake jelly candy canes chocolate bar. Lollipop chocolate bar danish chupa chups candy canes. Danish jelly chocolate bar cookie danish halvah jelly-o. Halvah soufflé wafer donut. Sweet roll halvah tiramisu cake dragée sugar plum croissant danish cupcake. Marzipan toffee chocolate cake sweet roll halvah muffin pudding carrot cake. Soufflé pastry lollipop bonbon.",
    "link": "",
    "course": "5f321837f2c495ef0ab9d76a"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "549dab2e626d586367cafa56f33f6c8e.jpg",
    "text": "Tiramisu chocolate cake gingerbread cake brownie sweet roll sweet roll. Gingerbread cotton candy fruitcake lemon drops wafer sweet apple pie. Halvah marshmallow chocolate cake soufflé jelly cheesecake cotton candy. Biscuit chocolate cake lollipop marshmallow bonbon tootsie roll oat cake. Soufflé cake brownie candy canes. Dessert bonbon cake muffin chocolate chupa chups chocolate bar pie. Muffin topping tootsie roll jelly donut chocolate bar marshmallow tiramisu chupa chups. Chupa chups dragée tootsie roll tiramisu tiramisu jelly gummi bears. Toffee cotton candy marzipan.",
    "link": "",
    "course": "5f32184876db89b4fdc93f78"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "b0e6f355ff294fd2aeef253edd64e575.jpg",
    "text": "Fruitcake sesame snaps cookie carrot cake jujubes lemon drops. Biscuit muffin macaroon candy liquorice biscuit icing jelly beans dragée. Danish cupcake powder cheesecake pudding soufflé toffee fruitcake. Chocolate chocolate cake icing. Wafer pastry jujubes sweet roll jelly dragée biscuit marshmallow. Topping sugar plum caramels apple pie lemon drops. Tiramisu cotton candy candy canes bear claw apple pie bonbon macaroon. Dragée powder chocolate bar tiramisu. Pudding sweet cake pudding donut.",
    "link": "",
    "course": "5f32184876db89b4fdc93f78"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "6095567655e075c58ebf9e02008e53fd.jpg",
    "text": "Brownie caramels dragée cake bonbon sesame snaps soufflé marzipan. Lollipop biscuit sweet macaroon marzipan cotton candy. Jelly-o icing sugar plum liquorice cookie lollipop. Oat cake muffin dessert. Liquorice gummies sesame snaps caramels macaroon toffee wafer soufflé cake. Sweet roll gummi bears wafer macaroon tiramisu jelly jelly-o chupa chups marshmallow. Brownie jujubes croissant cheesecake tart toffee pastry macaroon.",
    "link": "",
    "course": "5f32184876db89b4fdc93f78"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "52752917005f0f5c0d16260974b19618.jpg",
    "text": "Chocolate jelly jelly. Wafer cheesecake jelly lemon drops tart topping. Candy canes soufflé sweet soufflé donut soufflé. Fruitcake caramels tiramisu sugar plum marshmallow. Muffin chocolate bar croissant carrot cake tart macaroon sweet roll biscuit. Cake cake cake apple pie. Jujubes jujubes candy sugar plum fruitcake brownie croissant sweet. Macaroon muffin brownie fruitcake jelly-o fruitcake cheesecake sweet roll brownie.",
    "link": "",
    "course": "5f32184876db89b4fdc93f78"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "01aad261ada79bd6015244ef646fa838.jpg",
    "text": "Dessert danish chocolate bar caramels. Marshmallow jelly-o danish powder. Croissant topping candy fruitcake biscuit sugar plum gummies toffee cupcake. Candy canes toffee fruitcake powder jujubes bear claw sugar plum jelly beans apple pie. Icing donut sweet chocolate. Oat cake toffee jelly icing bonbon biscuit.",
    "link": "",
    "course": "5f32184876db89b4fdc93f78"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "f1bd34e7478f88b54c7e2f57d8402350.jpg",
    "text": "Chocolate cake lemon drops toffee. Icing oat cake wafer sweet roll. Jujubes chupa chups oat cake sweet cheesecake dragée. Croissant cupcake tart fruitcake sesame snaps bonbon. Cupcake donut soufflé sugar plum. Tootsie roll candy fruitcake powder gummies. Chocolate bar jelly cheesecake.",
    "link": "",
    "course": "5f32189045fbb6931e97b3f3"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "8b4df50214180af185887f61d6f2d4d5.jpg",
    "text": "Powder sweet marshmallow gummi bears caramels topping. Marshmallow cotton candy powder dessert bear claw cake. Wafer ice cream fruitcake. Tart biscuit marzipan pudding wafer. Donut bear claw bear claw soufflé powder toffee danish oat cake. Sweet sugar plum cupcake tart dragée candy canes sugar plum cake sweet.",
    "link": "",
    "course": "5f32189045fbb6931e97b3f3"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "734b4ab0071bd09329d4ff922f70daf9.jpg",
    "text": "Ice cream sugar plum gummi bears jelly beans sweet muffin tart sugar plum tiramisu. Cookie gummi bears chocolate brownie oat cake chocolate cake oat cake. Powder soufflé wafer chupa chups soufflé cookie. Chocolate jelly beans biscuit pie caramels cookie powder. Bear claw pastry pastry. Toffee chocolate chocolate chocolate soufflé. Dragée carrot cake sweet. Icing brownie chocolate powder halvah. Carrot cake liquorice liquorice sweet tart brownie tart fruitcake.",
    "link": "",
    "course": "5f32189045fbb6931e97b3f3"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "02d555f67450dfe650afb333056a2627.jpg",
    "text": "Tiramisu dessert macaroon donut jelly bear claw chupa chups. Cake liquorice wafer jujubes. Croissant pudding caramels liquorice cupcake. Cheesecake liquorice tiramisu brownie jelly-o sesame snaps halvah chocolate cake marzipan. Muffin marshmallow dragée biscuit biscuit. Topping candy canes candy canes apple pie gummies.",
    "link": "",
    "course": "5f32189045fbb6931e97b3f3"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "cf479afdc4db58845695a74e9f2354e3.jpg",
    "text": "Powder candy ice cream marshmallow cookie danish marshmallow croissant apple pie. Powder pastry marzipan sugar plum. Chocolate cake sweet roll apple pie apple pie tootsie roll cheesecake candy. Soufflé gummi bears tart. Biscuit tart carrot cake ice cream danish sweet roll cupcake macaroon chocolate cake. Carrot cake topping liquorice tart cookie lollipop. Croissant jelly beans jelly muffin pastry. Topping pastry biscuit tiramisu sweet roll. Jelly beans pudding carrot cake. Donut ice cream croissant jelly beans.",
    "link": "",
    "course": "5f32189045fbb6931e97b3f3"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "778283e845793fc031e89b4f0d6d2e4f.jpg",
    "text": "Biscuit fruitcake tart croissant oat cake chocolate bar sugar plum gingerbread sesame snaps. Powder jujubes jujubes carrot cake topping icing bonbon caramels tiramisu. Sesame snaps fruitcake powder cotton candy tootsie roll. Ice cream croissant liquorice. Chocolate cake topping brownie. Brownie gummies macaroon cookie carrot cake sweet jujubes. Chocolate cake pastry gingerbread icing wafer chocolate. Chocolate ice cream bear claw pastry dessert biscuit ice cream candy canes cookie.",
    "link": "",
    "course": "5f32189b6e9252cb3cf4fffc"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "c79901a7b25d408e818a6acbc95821bf.jpg",
    "text": "Biscuit fruitcake tart croissant oat cake chocolate bar sugar plum gingerbread sesame snaps. Powder jujubes jujubes carrot cake topping icing bonbon caramels tiramisu. Sesame snaps fruitcake powder cotton candy tootsie roll. Ice cream croissant liquorice. Chocolate cake topping brownie. Brownie gummies macaroon cookie carrot cake sweet jujubes. Chocolate cake pastry gingerbread icing wafer chocolate. Chocolate ice cream bear claw pastry dessert biscuit ice cream candy canes cookie.",
    "link": "",
    "course": "5f32189b6e9252cb3cf4fffc"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "0f425c39eb4be2f3329064b32f99bc55.jpg",
    "text": "Biscuit fruitcake tart croissant oat cake chocolate bar sugar plum gingerbread sesame snaps. Powder jujubes jujubes carrot cake topping icing bonbon caramels tiramisu. Sesame snaps fruitcake powder cotton candy tootsie roll. Ice cream croissant liquorice. Chocolate cake topping brownie. Brownie gummies macaroon cookie carrot cake sweet jujubes. Chocolate cake pastry gingerbread icing wafer chocolate. Chocolate ice cream bear claw pastry dessert biscuit ice cream candy canes cookie.",
    "link": "",
    "course": "5f32189b6e9252cb3cf4fffc"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "1427c26a5bf4c5e25c1db5f784c360a0.jpg",
    "text": "Biscuit fruitcake tart croissant oat cake chocolate bar sugar plum gingerbread sesame snaps. Powder jujubes jujubes carrot cake topping icing bonbon caramels tiramisu. Sesame snaps fruitcake powder cotton candy tootsie roll. Ice cream croissant liquorice. Chocolate cake topping brownie. Brownie gummies macaroon cookie carrot cake sweet jujubes. Chocolate cake pastry gingerbread icing wafer chocolate. Chocolate ice cream bear claw pastry dessert biscuit ice cream candy canes cookie.",
    "link": "",
    "course": "5f32189b6e9252cb3cf4fffc"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "e3b55d91033ca3c024a83d27af4f622b.jpg",
    "text": "Biscuit fruitcake tart croissant oat cake chocolate bar sugar plum gingerbread sesame snaps. Powder jujubes jujubes carrot cake topping icing bonbon caramels tiramisu. Sesame snaps fruitcake powder cotton candy tootsie roll. Ice cream croissant liquorice. Chocolate cake topping brownie. Brownie gummies macaroon cookie carrot cake sweet jujubes. Chocolate cake pastry gingerbread icing wafer chocolate. Chocolate ice cream bear claw pastry dessert biscuit ice cream candy canes cookie.",
    "link": "",
    "course": "5f32189b6e9252cb3cf4fffc"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Vivamus Nec",
    "image": "ad915ed5310b507a19883e432a9d3ced.jpg",
    "text": "Marshmallow wafer sweet roll fruitcake gummi bears. Caramels icing soufflé ice cream pie chocolate danish. Sweet lollipop tootsie roll chocolate bar topping powder caramels. Icing sugar plum cookie. Gummies apple pie bonbon caramels macaroon. Donut carrot cake icing carrot cake gummies. Apple pie cheesecake sesame snaps candy jelly candy. Marshmallow macaroon cheesecake marshmallow bonbon.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Malesuada Enim",
    "image": "885129c461f4e93872ca6e9fa5c0e938.jpg",
    "text": "Halvah gingerbread bear claw croissant pie toffee caramels ice cream topping. Topping chocolate jujubes cotton candy powder jelly beans jelly lollipop. Tiramisu powder fruitcake bonbon jujubes halvah. Lollipop lollipop chocolate cake chocolate bar. Topping cake chocolate cake jelly-o pudding cake jujubes. Croissant pie bear claw candy dragée tootsie roll cookie oat cake. Chocolate muffin macaroon chupa chups jelly beans chocolate cake tart bonbon caramels. Cake dessert bonbon. Croissant candy lollipop ice cream tiramisu sesame snaps. Icing cheesecake jelly candy bonbon sugar plum.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "A Blandit",
    "image": "2492469c7a244e8174cc7f6abe7f05ff.jpg",
    "text": "Gummies soufflé sugar plum jujubes sweet cookie liquorice powder jelly-o. Apple pie halvah carrot cake sugar plum. Sesame snaps jelly-o ice cream wafer tootsie roll. Cookie apple pie cupcake tootsie roll dessert. Oat cake candy muffin gingerbread. Toffee wafer powder chupa chups jelly biscuit cupcake sweet marzipan. Sugar plum pudding caramels topping cheesecake cake sweet roll cheesecake.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Leo Donec",
    "image": "e8c6d4656dd01e4bd8f77baeb7dee218.jpg",
    "text": "Candy toffee apple pie ice cream croissant cotton candy oat cake. Topping jelly beans cotton candy pastry jelly-o. Ice cream cake tootsie roll ice cream. Marzipan toffee biscuit cookie cake sugar plum cookie liquorice. Biscuit danish topping. Donut marzipan pastry caramels gummies dragée pastry jelly-o dessert. Liquorice pudding lemon drops pudding apple pie soufflé cake marshmallow. Sesame snaps powder liquorice dragée carrot cake chupa chups.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Odio Ante",
    "image": "b6b7e9e013b0b5fc4b7ae0b246d27f77.jpg",
    "text": "Candy dessert gummies cake tart. Jelly beans marshmallow chocolate cake caramels lemon drops dessert liquorice. Cheesecake brownie cotton candy bear claw gummies. Toffee jelly marzipan ice cream tootsie roll cake. Jelly jelly-o lemon drops fruitcake. Marshmallow tootsie roll halvah donut.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 6,
    "title": "Ornare Eget",
    "image": "407444a631b7368e8bf82f23052f8518.jpg",
    "text": "Cake halvah chocolate bar biscuit tootsie roll candy canes jujubes chocolate bar liquorice. Candy carrot cake tart. Cupcake danish toffee powder gummies tart gummi bears carrot cake. Gingerbread biscuit bonbon biscuit. Gingerbread halvah cotton candy. Fruitcake donut lollipop icing.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 7,
    "title": "Augue Quis",
    "image": "698a612762b93da898fcf606e51b6bbc.jpg",
    "text": "Toffee pudding cotton candy marzipan dessert cake sesame snaps marzipan. Liquorice croissant dessert cheesecake gummies cupcake. Sweet cake muffin tootsie roll jelly beans cake caramels halvah dragée. Chocolate cake donut carrot cake pie pastry pie. Gummies macaroon chupa chups pastry. Lemon drops toffee candy canes sweet croissant brownie soufflé. Wafer tart lemon drops cake icing oat cake macaroon. Oat cake pudding chocolate cookie tart cake cotton candy cookie. Apple pie sugar plum tootsie roll gingerbread tootsie roll wafer.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 8,
    "title": "Ornare Convallis",
    "image": "c723dd5759ddf618ddaf19dc391f4c15.jpg",
    "text": "Candy cake sesame snaps tiramisu ice cream donut jelly beans toffee. Chocolate cake chocolate cake biscuit biscuit lemon drops brownie biscuit apple pie lollipop. Jelly-o pie biscuit jujubes liquorice toffee powder gummi bears. Icing sesame snaps powder ice cream sugar plum. Icing toffee lemon drops topping carrot cake macaroon cupcake. Gummies sugar plum donut croissant lemon drops dessert pastry. Cotton candy ice cream powder topping cookie gummi bears. Topping dragée jujubes. Tart tart fruitcake cheesecake wafer carrot cake. Liquorice sugar plum bonbon carrot cake apple pie bonbon candy sweet roll.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 9,
    "title": "Nisi Proin",
    "image": "76dff647ff31ca4d1920d7275aed8ed5.jpg",
    "text": "Tart chocolate cake brownie jelly beans. Wafer topping dragée icing gummies marzipan ice cream. Soufflé jujubes carrot cake gingerbread. Ice cream pastry carrot cake cake danish brownie powder. Brownie caramels chocolate. Candy wafer soufflé lollipop croissant muffin macaroon. Cake lemon drops powder caramels chocolate candy. Jelly beans candy canes icing. Ice cream oat cake lemon drops cotton candy halvah apple pie pastry dragée. Cupcake soufflé dessert cake.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),
  new db.Page({
    "pageNumber": 10,
    "title": "Cursus Efficitur",
    "image": "f7517eac00d713d153e67f5f4082061e.jpg",
    "text": "Ice cream croissant sweet brownie liquorice fruitcake. Chocolate lollipop cotton candy danish tart dragée liquorice pudding. Danish sugar plum cake jelly-o candy tootsie roll cotton candy. Halvah bear claw chupa chups soufflé. Croissant gummi bears halvah biscuit ice cream. Icing cotton candy pastry fruitcake. Icing icing cheesecake dragée cupcake sugar plum soufflé cheesecake.",
    "link": "",
    "course": "5f3218a79fb53ab78fa20be6"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "4970aa74098030b61a333ede81ac708f.jpg",
    "text": "Caramels gummies macaroon marzipan jelly beans biscuit halvah candy canes pastry. Icing lollipop halvah ice cream. Marshmallow cotton candy gingerbread tootsie roll pie. Cupcake caramels halvah gummies bonbon fruitcake toffee bear claw. Cookie donut gingerbread carrot cake sugar plum toffee liquorice icing. Halvah sweet pastry lollipop cake marzipan chocolate carrot cake gummies. Icing halvah sugar plum lemon drops carrot cake sesame snaps macaroon gingerbread gummies. Muffin jelly tart candy marzipan. Halvah cupcake marshmallow carrot cake chocolate bonbon sesame snaps sugar plum. Cupcake donut gummies chocolate cake apple pie sugar plum.",
    "link": "",
    "course": "5f3218b3903411d48b2eab1e"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "fceaea01d630ba399108cf1d241ec825.jpg",
    "text": "Jelly-o candy sweet roll croissant jelly tiramisu sweet roll sweet jujubes. Jujubes croissant donut. Danish sugar plum bonbon lemon drops soufflé bear claw gummi bears. Marzipan tootsie roll sugar plum caramels powder. Chocolate bar marzipan halvah sweet roll. Lollipop muffin powder lollipop powder dragée jelly. Marzipan tart muffin. Jujubes gummi bears lemon drops. Powder marshmallow apple pie icing pastry. Ice cream lollipop marshmallow sugar plum pie.",
    "link": "",
    "course": "5f3218b3903411d48b2eab1e"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "ed74435b6e8d667d46157be09e3e8ed9.jpg",
    "text": "Jelly cupcake lollipop. Candy canes sweet roll cupcake chocolate bar biscuit macaroon. Candy canes ice cream gummi bears dessert cotton candy cheesecake marzipan cheesecake. Jujubes jelly beans icing cake bear claw cake. Brownie biscuit soufflé ice cream. Cookie dessert bear claw gummi bears pie apple pie carrot cake candy canes chocolate. Chocolate cake jelly-o bonbon muffin sugar plum.",
    "link": "",
    "course": "5f3218b3903411d48b2eab1e"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "55ce5a1b8fbd2d835961798e747b396e.jpg",
    "text": "Caramels sweet marshmallow fruitcake powder cupcake brownie. Cupcake toffee carrot cake tart icing dragée tootsie roll sugar plum. Sweet chocolate sweet dessert caramels lollipop jelly. Candy canes powder dessert. Chocolate cake dessert chocolate. Gummi bears ice cream chocolate bar cake soufflé. Cheesecake cake caramels croissant macaroon. Cotton candy cupcake tootsie roll jelly beans. Bonbon dragée apple pie lemon drops danish tart gummies.",
    "link": "",
    "course": "5f3218b3903411d48b2eab1e"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "121643b5d219bf5a7ec6a69543ddca8d.jpg",
    "text": "Gummies chocolate cake chocolate cake macaroon tiramisu chocolate bar carrot cake cake. Biscuit dessert brownie marzipan candy cookie liquorice macaroon. Marzipan wafer danish jelly cheesecake jelly wafer tootsie roll. Chocolate bar halvah bear claw cake sweet candy bonbon jelly beans oat cake. Bear claw chocolate bar icing pie soufflé bear claw. Tart brownie chocolate. Cake candy canes lemon drops cookie cake halvah sweet roll.",
    "link": "",
    "course": "5f3218b3903411d48b2eab1e"
  }),

  new db.Page({
    "pageNumber": 1,
    "title": "Page I",
    "image": "c89000746a7841104a09bec1463301c4.jpg",
    "text": "Jelly-o marshmallow bonbon jelly powder danish. Carrot cake tart biscuit lollipop. Bonbon icing chocolate pie apple pie icing jelly beans lollipop. Lemon drops oat cake gummies. Icing jujubes jelly croissant. Donut danish cake donut bear claw macaroon tart halvah. Pastry icing halvah biscuit bear claw jelly-o halvah jelly fruitcake. Cake apple pie jujubes dragée. Candy chocolate bar chocolate cake lemon drops sesame snaps chocolate bear claw.",
    "link": "",
    "course": "5f3218bf4cd14dbcb79b43b3"
  }),
  new db.Page({
    "pageNumber": 2,
    "title": "Page II",
    "image": "abaca29c706639bce292d4a80f8e673c.jpg",
    "text": "Topping lollipop caramels chocolate toffee pie gingerbread candy. Marshmallow dragée dragée sweet oat cake wafer. Sesame snaps chocolate bar sugar plum cake jujubes candy canes soufflé pie icing. Candy canes toffee bear claw topping dessert bonbon. Macaroon icing jujubes. Biscuit sugar plum macaroon icing pie toffee. Candy donut jelly. Cotton candy sweet jelly beans cake candy candy canes.",
    "link": "",
    "course": "5f3218bf4cd14dbcb79b43b3"
  }),
  new db.Page({
    "pageNumber": 3,
    "title": "Page III",
    "image": "69e113d5efe15c97e81f88c3a8db617a.jpg",
    "text": "Marshmallow powder oat cake brownie jelly-o gummi bears. Cookie sweet chupa chups. Candy liquorice gingerbread candy canes apple pie icing halvah jelly-o. Bonbon pudding sweet roll oat cake toffee gummi bears cheesecake. Cheesecake brownie powder carrot cake donut pie wafer sweet roll. Donut chocolate cake muffin chupa chups tiramisu. Muffin tiramisu ice cream marzipan toffee jelly. Icing oat cake pie. Powder sugar plum brownie.",
    "link": "",
    "course": "5f3218bf4cd14dbcb79b43b3"
  }),
  new db.Page({
    "pageNumber": 4,
    "title": "Page IV",
    "image": "1c8a3ec041456d5e569015c2dda68ea2.jpg",
    "text": "Chupa chups donut carrot cake. Cake soufflé sweet wafer dessert cheesecake. Candy canes croissant candy canes danish chocolate cake ice cream fruitcake liquorice. Pastry jelly-o donut. Gingerbread powder liquorice donut pastry. Lollipop icing dragée candy canes jelly-o jujubes. Caramels liquorice sweet roll jelly beans sweet cheesecake gummies pudding tiramisu. Pudding tootsie roll marzipan marzipan topping sesame snaps oat cake. Jujubes lollipop cookie.",
    "link": "",
    "course": "5f3218bf4cd14dbcb79b43b3"
  }),
  new db.Page({
    "pageNumber": 5,
    "title": "Page V",
    "image": "c5fd635824fc32c308bf8dc3571b8187.jpg",
    "text": "Muffin cookie chocolate cake brownie. Caramels pudding gingerbread carrot cake cake wafer pie brownie pudding. Candy soufflé toffee bonbon donut pastry chupa chups. Tart dragée fruitcake chocolate bar biscuit. Chocolate bar pie cake cotton candy bear claw dessert. Soufflé chocolate cookie bonbon bonbon. Dragée chocolate cake marzipan cheesecake muffin cake pudding tiramisu dessert. Tiramisu bear claw jelly beans oat cake danish brownie. Tart ice cream cake chocolate bar sesame snaps pie pastry croissant.",
    "link": "",
    "course": "5f3218bf4cd14dbcb79b43b3"
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


