var express = require("express");
var router = express.Router();

router.get("/new", (req, res) => {
  res.send("Book Form");
});
router.get("/", (req, res) => {
  res.send("Boooookz");
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
});
router.get("/:id/edit", (req, res) => {
  let id = req.params.id;
});
router.post("/", (req, res) => {});
router.put("/:id", (req, res) => {
  let id = req.params.id;
});
router.delete("/:id", (req, res) => {
  let id = req.params.id;
});

module.exports = router;
