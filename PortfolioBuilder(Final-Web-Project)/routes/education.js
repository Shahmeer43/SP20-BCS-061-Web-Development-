console.clear();
var express = require("express");
var PortfolioModel = require("../models/portfolioModel");
var router = express.Router();
var mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const name = portfolio.name;
  const education = portfolio.education;
  res.render("education/education", { data: education, name: name });
});

router.get("/addEducation", async (req, res, next) => {
  res.render("education/addEducation");
});

router.post("/addEducation", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.education.push(req.body.education);
  await portfolio.save();
  res.redirect("/education");
});

router.get("/deleteEducation/:index", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.education.splice(req.params.index, 1);
  await portfolio.save();
  res.redirect("/education");
});

module.exports = router;
