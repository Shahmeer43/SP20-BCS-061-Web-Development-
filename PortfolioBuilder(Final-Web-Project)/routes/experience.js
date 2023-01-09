console.clear();
var express = require("express");
var PortfolioModel = require("../models/portfolioModel");
var router = express.Router();
var mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const experience = portfolio.experience;
  const name = portfolio.name;
  res.render("experience/experience", { data: experience, name: name });
});

router.get("/addExperience", async (req, res, next) => {
  res.render("experience/addExperience");
});

router.post("/addExperience", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.experience.push(req.body.experience);
  await portfolio.save();
  res.redirect("/experience");
});

router.get("/deleteExperience/:index", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.experience.splice(req.params.index, 1);
  await portfolio.save();
  res.redirect("/experience");
});

module.exports = router;
