var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var sports = ["cricket", "football", "volleyball"];
  res.render("index", { sports: sports });
});
router.get("/", (req, res) => {
  res.render("about");
});

module.exports = router;
