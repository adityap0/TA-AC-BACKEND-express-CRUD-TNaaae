// writeCode

// In previous application

// 1. Display List of users on a template

// - create a route in user router, GET request on "/users"
// - fetch all users from database
// - create users.ejs in views
// - render users.ejs and pass list of users from database as second argument as object

// 2. Display single user

// - create a GET request on "/users/:id"
// - get id using req.params.id
// - fetch user from database using id received from params
// - render singleUser.ejs with single user information.

let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let path = require("path");
let userRouter = require("./routes/user");
var app = express();

//mongoose Connect
mongoose.connect(
  "mongodb://127.0.0.1:27017/userDb",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (error) => {
    console.log(error ? error : `Connected to Db`);
  }
);
//view engine set-up
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
//routing Middlewares
app.use("/users", userRouter);
//error Handlers
app.use((req, res) => {
  res.send(`404..`);
});
app.use((error, req, res, next) => {
  next(error);
});
//listener
app.listen(4000, () => {
  console.log(`Connected on 4000...`);
});
