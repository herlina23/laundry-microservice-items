const Item = require("../models/Item");

module.exports = {
  index2: (req, res) => {
    Item.find()
      .then(item => res.json(item))
      .catch(err => console.log(err));
  },
  index: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Item.find()
        .then(item => res.json(item))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  show: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  update: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Item.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      )
        .then(item => res.json(item))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  store: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Item.create({ ...req.body })
        .then(item => res.json(item))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  destroy: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Item.findOneAndDelete({ _id: req.params.id })
        .then(item => res.json(item))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
