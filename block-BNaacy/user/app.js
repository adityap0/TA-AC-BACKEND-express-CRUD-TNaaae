// 6. return created user or error in response

// - if success, return index page i.e. "/" path
// - if error, return back to users create form

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
