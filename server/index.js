import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import portfolioRoutes from "./routes/portfolio.js";

import getDataBTC_1W from "./api/getDataBTC_1W.js";

dotenv.config();

const app = express();

//Middleware
app.use(express.json()); // Parse JSON bodies (access to req.body)
app.use((req, res, next) => {
  console.log("Request received");
  console.log(`Method: ${req.method}. Path: ${req.path}`);
  next();
});

//Routes
app.use("/api/portfolio", portfolioRoutes);

const getAllIndicators = async () => {
  // getDataBTC_1W();
};

//Excecute getAllIndicators function every 1 minutes
setInterval(() => {
  getAllIndicators();
}, 1 * 60 * 1000);

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
