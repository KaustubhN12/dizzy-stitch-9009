const express = require("express");
const HealthDealRoute = express.Router();
const { HealthDealModel } = require("../model/AllDeals.model");

HealthDealRoute.post("/add", async (req, res) => {
  try {
    const newcompany = new HealthDealModel(req.body);
    await newcompany.save();
    // HealthDealModel.insertMany(req.body.healthDeals)
    res.status(200).send({ msg: "new company added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

HealthDealRoute.get("/get", async (req, res) => {
  try {
    const allcompany = await HealthDealModel.find();

    res.status(200).send({ msg: allcompany });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

HealthDealRoute.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await HealthDealModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: " company id updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

HealthDealRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await HealthDealModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: " company id deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = {
  HealthDealRoute,
};
