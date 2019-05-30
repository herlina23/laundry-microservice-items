const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

const {
  index,
  show,
  store,
  update,
  destroy,
  index2
} = require("../controllers/item");
router.get("/show_item/", index2);
router.use(verifyToken);
router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
