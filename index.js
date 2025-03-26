import express from "express";
import dotenv from "dotenv";
import Taapi from "taapi";

dotenv.config();
const PORT = process.env.port || 3000;

const app = express();
const taapi = new Taapi.default(process.env.TAAPI_KEY);

taapi.setDefaultExchange("binance");

// taapi.getIndicator("rsi", "BTC/USDT", "1h").then((rsi) => {
//   console.log(rsi);
//   console.log(typeof rsi);
// });

// taapi.getExchangeSymbols("crypto", "binance", "USDT").then((symbols) => {
//   console.log(symbols);
// });

// Reset Bulk Query
taapi.resetBulkConstructs();

// Add calculations
taapi.addCalculation("rsi", "BTC/USDT", "1h", "rsi_1h");
// taapi.addCalculation("macd", "BTC/USDT", "1h", "macd_1h");
// taapi.addCalculation("ema", "BTC/USDT", "1h", "ema_fast_1h", {
//   period: 9,
//   backtrack: 1,
// });
// taapi.addCalculation("ema", "BTC/USDT", "1h", "ema_slow_1h", {
//   period: 20,
//   backtrack: 1,
// });

// Execute Crypto request
taapi
  .executeBulk("crypto")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
