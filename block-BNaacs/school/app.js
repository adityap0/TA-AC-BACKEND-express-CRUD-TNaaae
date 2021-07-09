let express = require("express");
var app = express();
let mongoose = require("mongoose");
let path = require("path");

//connect to Db
mongoose.connect(
  "mongodb://127.0.0.1:27017/school",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);

//ejs engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middlewares
//routes
app.get("/", (req, res) => {
  var sports = ["cricket", "football", "volleyball"];
  res.render("index", { sports: sports });
});
//error
app.use((req, res, next) => {
  res.send(`404 : Page not found ...`);
});
//listener
app.listen(4000, () => {
  console.log(`Connected to server 4000 ...`);
});
