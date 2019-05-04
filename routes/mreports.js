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
router.get("/", showItem);
router.get("/", showItemin);
router.get("/", showItemout);
router.get("/", showOutcome);

module.exports = router;
