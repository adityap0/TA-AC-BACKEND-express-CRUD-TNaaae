let express = require("express");
let router = express.Router();
let User = require("../models/user");

//Display all Users!
router.get("/", (req, res) => {
  User.find({}, (error, allUsers) => {
    if (error) next(error);
    res.render("allUsers", { users: allUsers });
  });
});
//Create new Users!
router.get("/new", (req, res) => {
  res.render("newUserForm");
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id, (error, user) => {
    if (error) return next(error);
    res.render("singleUser", { user });
  });
});
router.post("/new", (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) return next(error);
    res.redirect("/users");
  });
});
//update users
router.get("/:id/edit", (req, res) => {
  console.log(req.url);
  let id = req.params.id;
  User.findById(id, (error, user) => {
    if (error) return next(error);
    res.render("userEditForm", { user });
  });
});
router.post("/:id/edit", (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (error, updatedUser) => {
    console.log(updatedUser);
    if (error) return next(error);
    res.redirect("/users");
  });
});
// Delete
router.get("/:id/delete", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error, user) => {
    if (error) return next(error);
    res.redirect("/users");
  });
});

module.exports = router;
