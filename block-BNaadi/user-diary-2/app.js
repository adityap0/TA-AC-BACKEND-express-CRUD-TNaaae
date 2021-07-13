let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let path = require("path");
let indexRouter = require("./routes/index");
let userRouter = require("./routes/users");

var app = express();

//mongoose Connect
mongoose.connect(
  "mongodb://127.0.0.1:27017/userDiary2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    console.log(error ? error : "Connected to Db Baby!");
  }
);
//ejs engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
//routing middlewares
app.use("/", indexRouter);
app.use("/users", userRouter);
//errors
app.use((req, res) => {
  res.send("404: Page not Found baby!");
});
app.use((error, req, res, next) => {
  next(error);
});
//listnerr
app.listen(4000, () => {
  console.log(`Server is active on 4000...`);
});
