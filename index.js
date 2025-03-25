import express from "express";
import dotenv from "dotenv";
import Taapi from "taapi";

dotenv.config();
const PORT = process.env.port || 3000;

const app = express();
const taapi = new Taapi.default(process.env.TAAPI_KEY);

taapi.setDefaultExchange("binance");

taapi.getIndicator("rsi", "BTC/USDT", "1h").then((rsi) => {
  console.log(rsi);
});

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
