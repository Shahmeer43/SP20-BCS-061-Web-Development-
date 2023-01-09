var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
const aboutRouter = require("./routes/about");
const skillsRouter = require("./routes/skills");
const workRouter = require("./routes/work");
const educationRouter = require("./routes/education");
const experienceRouter = require("./routes/experience");
var sessionAuthentication = require("./middlewares/sessionAuth");

var app = express();
app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 6000000 },
    saveUninitialized: true,
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(sessionAuthentication);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/intro", indexRouter);
app.use("/about", aboutRouter);
app.use("/skills", skillsRouter);
app.use("/work", workRouter);
app.use("/education", educationRouter);
app.use("/experience", experienceRouter);
app.use("/", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/portfolio")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
