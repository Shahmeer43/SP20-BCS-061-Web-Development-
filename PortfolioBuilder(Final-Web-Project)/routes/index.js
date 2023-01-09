var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const PortfolioModel = require("../models/portfolioModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const name = portfolio.name;
  const position = portfolio.position;
  const title = portfolio.title;
  res.render("index", { name, position, title });
  console.log(req.session.user);
});

router.get("/edit", async function (req, res, next) {
  res.render("positionTitle");
});

router.post("/edit", async function (req, res, next) {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.name = req.body.name;
  portfolio.position = req.body.position;
  portfolio.title = req.body.title;
  await portfolio.save();
  res.redirect("/intro");
});

module.exports = router;
