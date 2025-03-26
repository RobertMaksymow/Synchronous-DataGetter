import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import Taapi from "taapi";

dotenv.config();
const PORT = process.env.port || 3000;

const app = express();

await axios
  .post("https://api.taapi.io/bulk", {
    secret: `${process.env.TAAPI_KEY}`,
    construct: {
      exchange: "binance",
      symbol: "BTC/USDT",
      interval: "1h",
      indicators: [
        {
          // Relative Strength Index
          indicator: "rsi",
        },
        {
          // Chaikin Money Flow
          indicator: "cmf",
          period: 20, // Override the default 14
        },
        {
          // MACD Backtracked 1
          id: "my_custom_id",
          indicator: "macd",
          backtrack: 1,
        },
      ],
    },
  })
  .then((response) => {
    console.log(response.data.data[0]);
    console.log(response.data.data[1]);
    console.log(response.data.data[2]);
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
