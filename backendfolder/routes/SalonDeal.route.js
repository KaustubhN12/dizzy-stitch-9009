const express = require("express");
const SalonDealRoute = express.Router();
const { SalonDealModel } = require("../model/AllDeals.model");

SalonDealRoute.post("/add", async (req, res) => {
  try {
    const newcompany = new SalonDealModel(req.body);
    await newcompany.save();
    // await SalonDealModel.insertMany(req.body.salonDeals)
    res.status(200).send({ msg: "new company added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

SalonDealRoute.get("/get", async (req, res) => {
  try {
    const allcompany = await SalonDealModel.find();

    res.status(200).send({ msg: allcompany });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

SalonDealRoute.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    await SalonDealModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: " company id updated" });
  } catch (err) {
    console.log(id);
    res.status(400).send({ msg: err.message });
  }
});

SalonDealRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await SalonDealModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: " company id deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = {
  SalonDealRoute,
};
