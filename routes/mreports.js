const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

const {
  showItem,
  showItemin,
  showItemout,
  showOutcome
} = require("../controllers/mreport");

router.use(verifyToken);
router.get("/:id", showItem);
router.get("/:id", showItemin);
router.get("/:id", showItemout);
router.get("/:id", showOutcome);

module.exports = router;
