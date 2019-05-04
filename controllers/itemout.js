const Itemout = require("../models/Itemout");
const Item = require("../models/Item");

module.exports = {
  index: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.find()
        .populate("item")
        .then(itemout => res.json(itemout))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  show: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Itemout.findById(req.params.id)
        .populate("item")
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
      // Itemout.create({ ...req.body })
      //   .then(itemOut => {
      //     Item.findById(req.body.item_name)
      //       .then(item => {
      //         item.stock = item.stock - req.body.qty
      //         item.save()
      //         .then(item => res.json(itemOut))
      //       })
      //   })

      Itemout.create({ ...req.body })
        .then(itemOut => {
          Item.findById(req.body.item_name).then(item => {
            item.stock = item.stock - req.body.qty;
            item.save().then(item => res.json(itemOut));
            // to this
          });
        })

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
