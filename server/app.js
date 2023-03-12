const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

module.exports = app;
