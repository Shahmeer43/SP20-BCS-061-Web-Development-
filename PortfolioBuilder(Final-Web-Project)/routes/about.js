console.clear();
var express = require("express");
var PortfolioModel = require("../models/portfolioModel");
var router = express.Router();
var mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const about = portfolio.about;
  const name = portfolio.name;
  console.log(about);
  res.render("about/about", { data: about, name: name });
});

router.get("/editAbout", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const about = portfolio.about;
  console.log(about);
  res.render("about/editAbout", { data: about });
});

router.post("/editAbout", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.about = req.body.edit;
  await portfolio.save();
  res.redirect("/about");
});

module.exports = router;
