var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/register", function (req, res, next) {
  res.render("./users/register");
});

module.exports = router;
