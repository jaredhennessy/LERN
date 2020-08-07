const mongoose = require("mongoose");
const { Page } = require("../models");
module.exports = {
    findAll: function (req, res) {
        Page.find(req.query).populate("course")
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    new: function (req, res) {
        const newPage = new Page(req.body);
        Page.collection.insertOne(newPage)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    newArray: function (req, res) {
        for (i = 0; i < req.body.length; i++) {
            const newPage = new Page(req.body[i]);
            Page.collection.insertOne(newPage)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
    },
    update: function (req, res) {
        const id = mongoose.Types.ObjectId(req.params.id);
        Page.findOneAndUpdate({ _id: id }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        Page.findById(req.params.id).populate("course")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCourse: function (req, res) {
        Page.find({ course: req.params.id }, req.body).populate("course")
            .sort({ pageNumber: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCoursePage: function (req, res) {
        Page.find({ course: req.params.id, pageNumber: req.params.page }).populate("course")
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};