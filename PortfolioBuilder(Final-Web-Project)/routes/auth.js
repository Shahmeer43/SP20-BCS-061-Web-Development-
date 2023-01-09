var express = require("express");
var router = express.Router();
const PortfolioModel = require("../models/portfolioModel");
/* GET users listing. */
router.get("/register", async function (req, res, next) {
  res.render("users/register");
});

router.post("/register", async function (req, res, next) {
  const user = new PortfolioModel(req.body);
  await user.save();
  res.redirect("/");
});

router.get("/", async function (req, res, next) {
  res.render("users/login");
});

router.post("/", async function (req, res, next) {
  let user = await PortfolioModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.redirect("/");
  } else {
    req.session.user = user;
    console.log(req.session.user);
    return res.redirect("/intro");
  }
});

router.get("/logout", async function (req, res, next) {
  req.session.user = null;
  res.redirect("/");
});

module.exports = router;
