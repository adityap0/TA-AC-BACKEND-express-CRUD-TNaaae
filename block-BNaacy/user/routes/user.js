let express = require("express");
let router = express.Router();
let User = require("../models/user");

router.get("/new", (req, res) => {
  res.render("userForm");
});
router.post("/", (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (error, createdUser) => {
    if (error) return next(error);
    else res.send(req.body);
  });
});
module.exports = router;
