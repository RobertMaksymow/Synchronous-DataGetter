import mongoose from "mongoose";

//Schema defines a structure of document
// const Schema = mongoose.Schema;

const portfolioSchema = new mongoose.Schema(
  {
    transactionType: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    totalValue: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    coin: {
      type: String,
      required: true,
    },
    priceInBTC: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Model apply that Schema to a particular model
// then we use that model to interact with a collection of that name
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
