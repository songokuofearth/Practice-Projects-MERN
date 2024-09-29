const express = require("express");
const courseroutes = express.Router();
const courseController = require("../controllers/courseController")

courseroutes.post("/purchase",courseController.postPurchase);

courseroutes.get("/preview",courseController.getPurchases);
module.exports = courseroutes;
