const Itemin = require("../models/Itemin");
const Item = require("../models/Item");
const Itemout = require("../models/Itemout");
const Outcome = require("../models/Outcome");

//dreport ==> daily report

module.exports = {
  showItemin: (req, res) => {
    if (req.user.role == "admin") {
      Itemin.findById(req.params.id)
        // .populate("item")
        .then(dreport => res.json(dreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  showItem: (req, res) => {
    if (req.user.role == "admin") {
      Item.findById(req.params.id)
        .then(dreport => res.json(dreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  showItemout: (req, res) => {
    if (req.user.role == "admin") {
      Itemout.findById(req.params.id)
        .then(dreport => res.json(dreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  showOutcome: (req, res) => {
    if (req.user.role == "admin") {
      Outcome.findById(req.params.id)
        .then(dreport => res.json(dreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
