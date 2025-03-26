import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import getDataBTC_1W from "./api/getDataBTC_1W.js";

dotenv.config();
const PORT = process.env.port || 3000;

const app = express();

const getAllIndicators = async () => {
  getDataBTC_1W();
};

getAllIndicators();

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");

    //Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
