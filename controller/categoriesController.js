const db = require("../models");
const { Category } = require("../models");

module.exports = {
    findAll: function (req, res) {
        Category.find(req.query)
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    new: function (req, res) {
        const newCategory = new Category(req.body);
        Category.collection.insertOne(newCategory)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        const id = mongoose.Types.ObjectId(req.params.id);
        Category.findOneAndUpdate({ _id: id }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        Category.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
