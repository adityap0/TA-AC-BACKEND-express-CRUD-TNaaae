let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");
let path = require("path");
const { send } = require("process");
var app = express();
var userRouter = require("./routes/users");
//connect to Db
mongoose.connect(
  "mongodb://127.0.0.1:27017/user-diary",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);
//ejs engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
//routing
app.use("/users", userRouter);
//error-Handlers
app.use("/", (req, res) => {
  //   res.statusCode(404);
  res.send("404 : Not Found...");
});
//listners
app.listen(4000, () => {
  console.log(`Server is on 4000...`);
});
