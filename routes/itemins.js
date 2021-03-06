const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

const {
  index,
  show,
  store,
  update,
  search,
  destroy
} = require("../controllers/itemin");

router.use(verifyToken);
router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
