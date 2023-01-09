var mongoose = require("mongoose");
const portfolioSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: { type: String, default: "-" },
  about: { type: String, default: "-" },
  education: { type: [String], default: ["-"] },
  experience: { type: [String], default: ["-"] },
  skills: { type: [String], default: ["-"] },
  work: { type: [String], default: ["-"] },
  position: { type: String, default: "-" },
  title: { type: String, default: "-" },
});

let portfolio = mongoose.model("portfolio", portfolioSchema, "portfolio");
module.exports = portfolio;
