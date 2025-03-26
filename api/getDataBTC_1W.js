import axios from "axios";

const getDataBTC_1W = async (req, res) => {
  await axios
    .post("https://api.taapi.io/bulk", {
      secret: `${process.env.TAAPI_KEY}`,
      construct: {
        exchange: "binance",
        symbol: "BTC/USDT",
        interval: "1w",
        indicators: [
          {
            id: "BTC_1W_MA200",
            indicator: "ma",
            period: 200,
          },
          {
            id: "BTC_1W_MA100",
            indicator: "ma",
            period: 100,
          },
          {
            id: "BTC_1W_MA50",
            indicator: "ma",
            period: 50,
          },
          {
            id: "BTC_1W_MA5",
            indicator: "ma",
            period: 5,
          },
          {
            id: "BTC_1W_RSI",
            indicator: "rsi",
          },
          {
            id: "BTC_1W_MACD",
            indicator: "macd",
          },
          {
            id: "BTC_1W_BBANDS",
            indicator: "bbands",
          },
          {
            id: "BTC_1W_STOCH",
            indicator: "stoch",
            kPeriod: 14,
            dPeriod: 1,
            kSmooth: 3,
          },
        ],
      },
    })
    .then((response) => {
      response.data.data.map((n) => {
        console.log("dATA", n);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getDataBTC_1W;
