const express = require("express");
const mongoose = require("mongoose");
const CarparkModel = require("./models/carpark.model");
const DestinationModel = require("./models/destination.model");

mongoose
  .connect(
    "mongodb://137.132.165.53:27019/ttsh",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch(err => {
    console.error("Database connection error");
  });

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("TTSH API");
});

app.get('/carparks', async (req,res) => {
    let carparks = await CarparkModel.find({})
    res.send(carparks)
})

app.get('/destinations', async (req,res) => {
    let destinations = await DestinationModel.find({})
    res.send(destinations)
})

app.listen(port, () => console.log(`TTSH API listening on ${port}`));
