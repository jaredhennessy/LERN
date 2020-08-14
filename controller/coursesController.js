const mongoose = require("mongoose");
const { Course } = require("../models");

module.exports = {
  findAll: function (req, res) {
    Course.find(req.query)
      .populate([
        {
          path: "category",
          model: "Category",
          select: "category"
        },
        {
          path: "instructor",
          model: "Instructor",
          select: "username"
        },
        {
          path: "pages",
          model: "Page",
          select: "pageNumber title text link image"
        },
        {
          path: "users",
          model: "User",
          select: "username"
        }
      ])
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  new: function (req, res) {
    const newCourse = new Course(req.body);
    Course.collection
      .insertOne(newCourse)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    const id = mongoose.Types.ObjectId(req.params.id);
    Course.findOneAndUpdate({ _id: id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    Course.findById(req.params.id)
      .populate([
        {
          path: "category",
          model: "Category",
          select: "category"
        },
        {
          path: "instructor",
          model: "Instructor",
          select: "username"
        },
        {
          path: "pages",
          model: "Page",
          select: "pageNumber title text link image"
        },
        {
          path: "users",
          model: "User",
          select: "username"
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByCategory: function (req, res) {
    Course.find({ category: req.params.id })
      .populate([
        {
          path: "category",
          model: "Category",
          select: "category"
        },
        {
          path: "instructor",
          model: "Instructor",
          select: "username"
        },
        {
          path: "pages",
          model: "Page",
          select: "pageNumber"
        }
      ])
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByInstructor: function (req, res) {
    Course.find({ instructor: req.params.id })
      .populate([
        {
          path: "category",
          model: "Category",
          select: "category"
        },
        {
          path: "instructor",
          model: "Instructor",
          select: "username"
        },
        {
          path: "users",
          model: "User",
          select: "username"
        }
      ])
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
