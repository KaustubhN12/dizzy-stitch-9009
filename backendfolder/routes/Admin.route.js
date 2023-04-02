const express = require("express");
const { AdminModel } = require("../model/user.model");
const adminroute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminroute.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const user = await AdminModel.find({ email });
    let count = 0;
    for (let k of user) {
      if (k.email == email) {
        count++;
        console.log(k.email, email);
      }
    }

    if (count != 0) {
      res
        .status(200)
        .send({ msg: "Admin is allready registered, please login " });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const newuser = new AdminModel({ name, email, password: hash, phone });
        await newuser.save();
        res.status(200).send({ msg: "Admin registerd" });
      });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

adminroute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AdminModel.find({ email });
    bcrypt.compare(password, user[0].password, async (err, result) => {
      if (result) {
        res
          .status(200)
          .send({
            msg: "Admin is logged in",
            token: jwt.sign({ userID: user[0]._id }, "batman"),
            user: user,
          });
      } else {
        res.status(400).send({ msg: err.message });
      }
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = {
  adminroute,
};
