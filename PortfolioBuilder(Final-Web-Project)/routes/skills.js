console.clear();
var express = require("express");
var PortfolioModel = require("../models/portfolioModel");
var router = express.Router();
var mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const name = portfolio.name;
  const skills = portfolio.skills;
  console.log(skills);
  res.render("skills/skills", { data: skills, name: name });
});

router.get("/addSkills", async (req, res, next) => {
  res.render("skills/addSkills");
});

router.post("/addSkills", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.skills.push(req.body.skill);
  await portfolio.save();
  console.log(req.body.skill);
  res.redirect("/skills");
});

router.get("/deleteSkills/:index", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.skills.splice(req.params.index, 1);
  await portfolio.save();
  res.redirect("/skills");
});

module.exports = router;
