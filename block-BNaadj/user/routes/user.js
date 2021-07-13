let express = require("express");
let router = express.Router();
let User = require("../models/user");

//CREATE new USER
router.get("/new", (req, res) => {
  res.render("userForm");
});
router.post("/", (req, res, next) => {
  User.create(req.body, (error, createdUser) => {
    if (error) return next(error);
    else res.redirect("/users");
  });
});

//READ all users
router.get("/", (req, res, next) => {
  User.find({}, (error, allUsers) => {
    if (error) return next(error);
    else res.render("allUser", { users: allUsers });
  });
});
//READ single user by ID
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (error, singleUser) => {
    if (error) return next(error);
    else res.render("singleUser", { user: singleUser });
  });
});
//UPDATE single user by ID
router.get("/:id/edit", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (error, singleUser) => {
    if (error) return next(error);
    else res.render("editForm", { user: singleUser });
  });
});
router.post("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (error) => {
    if (error) return next(error);
    res.redirect("/users");
  });
});

//DELETE single User by Id
router.get("/:id/delete", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error, singleUser) => {
    if (error) return next(error);
    else res.redirect("/users");
  });
});

module.exports = router;
