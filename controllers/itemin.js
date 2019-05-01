const Itemin = require("../models/Itemin");
const Item = require("../models/Item");

module.exports = {
  index: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemin.find()
        .populate("item")
        .then(itemin => res.json(itemin))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  show: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemin.findById(req.params.id)
        .populate("item")
        .then(itemin => res.json(itemin))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  update: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemin.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      )
        .then(itemin => res.json(itemin))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  store: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemin.create({ ...req.body })
        .then(itemin => res.json(itemin))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  destroy: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemin.findOneAndDelete({ _id: req.params.id })
        .then(itemin => res.json(itemin))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
