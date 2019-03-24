const Itemout = require("../models/Itemout");

module.exports = {
  index: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.find()
        .then(itemout => res.json(itemout))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  show: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.findById(req.params.id)
        .then(itemout => res.json(itemout))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  update: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      )
        .then(itemout => res.json(itemout))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  store: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.create({ ...req.body })
        .then(itemout => res.json(itemout))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  destroy: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.findOneAndDelete({ _id: req.params.id })
        .then(itemout => res.json(itemout))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
