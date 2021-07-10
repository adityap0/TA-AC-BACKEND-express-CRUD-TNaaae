let express = require("express");
let mongoose = require("mongoose");
let path = require("path");
var indexRouter = require("./routes/index");
var booksRouter = require("./routes/books");
var studentRoute = require("./routes/students");
var app = express();

mongoose.connect(
  "mongodb://127.0.0.1:27017/school",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);
app.use("/books", booksRouter);
app.use("/students", studentRoute);

app.use((req, res, next) => {
  res.send(`404 : Page not found ...`);
});

app.listen(4000, () => {
  console.log(`Connected to server 4000 ...`);
});
