import mongoose from "mongoose";

//Schema defines a structure of document
// const Schema = mongoose.Schema;

const BTC_1W_Schema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    result: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

// Model apply that Schema to a particular model
// then we use that model to interact with a collection of that name
const BTC_1W = mongoose.model("BTC_1W", BTC_1W_Schema);
export default BTC_1W;
