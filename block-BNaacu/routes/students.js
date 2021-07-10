var express = require("express");
const { route } = require(".");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});
router.get("/new", (req, res) => {
  res.send("Student Form");
});
router.get("/:id", (req, res) => {
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
});

router.post("/", (req, res) => {
  res.send("Create a Student");
});

module.exports = router;
