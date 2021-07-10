let express = require("express");
let router = express.Router();

//GET Requests
router.get("/", (req, res) => {
  let users = ["adi11", "adi12", "adi22"];
  res.render("users", { users: users });
}); //w
// http://localhost:4000/users/new
router.get("/new", (req, res) => {
  res.render("userForm");
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.render("singleUser", { name: "Adi", email: "adi123@mail.com" });
}); //w

//POST Requests
router.post("/new", (req, res) => {
  res.send(req.body);
});

//PUT Requests
router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Update the user");
});

//DELETE Requests
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Delete this user");
});

//Export
module.exports = router;
