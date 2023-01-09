console.clear();
var express = require("express");
var PortfolioModel = require("../models/portfolioModel");
var router = express.Router();
var mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  const name = portfolio.name;
  const work = portfolio.work;
  res.render("work/work", { data: work, name: name });
});

router.get("/addWork", async (req, res, next) => {
  res.render("work/addWork");
});

router.post("/addWork", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.work.push(req.body.work);
  await portfolio.save();
  res.redirect("/work");
});

router.get("/deleteWork/:index", async (req, res, next) => {
  const userId = req.session.user._id;
  const portfolio = await PortfolioModel.findById(userId);
  portfolio.work.splice(req.params.index, 1);
  await portfolio.save();
  res.redirect("/work");
});

module.exports = router;
