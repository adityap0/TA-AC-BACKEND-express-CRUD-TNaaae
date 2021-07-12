let express = require("express");
let router = express.Router();
let User = require("../models/user");

router.get("/new", (req, res) => {
  res.render("userForm");
});
router.get("/", (req, res, next) => {
  User.find({}, (error, allUsers) => {
    if (error) return next(error);
    else res.render("allUser", { users: allUsers });
  });
});
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (error, singleUser) => {
    if (error) return next(error);
    else res.render("singleUser", { user: singleUser });
  });
});
router.get("/:id/edit", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (error, singleUser) => {
    if (error) return next(error);
    else res.render("editForm", { user: singleUser });
  });
});
router.get("/:id/delete", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error, singleUser) => {
    if (error) return next(error);
    else res.redirect("/users");
  });
});
router.post("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (error) => {
    if (error) return next(error);
    res.redirect("/users");
  });
});
router.post("/", (req, res, next) => {
  User.create(req.body, (error, createdUser) => {
    if (error) return next(error);
    else res.redirect("/users");
  });
});
module.exports = router;
