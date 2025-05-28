import express from "express";
import Portfolio from "../modelsDB/Portfolio_model.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "GET all Portfolio coins",
    status: "success",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: `GET Portfolio coin with ID: ${req.params.id}`,
    status: "success",
  });
});

router.post("/", async (req, res) => {
  const { transactionType, price, quantity, totalValue, coin, priceInBTC } =
    req.body;
  try {
    const portfolioTrade = await Portfolio.create({
      transactionType,
      price,
      quantity,
      totalValue,
      coin,
      priceInBTC,
    });
    res.status(200).json(portfolioTrade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({
    message: `DELETE Portfolio coin with ID: ${req.params.id}`,
    status: "success",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: `PATCH Portfolio coin with ID: ${req.params.id}`,
    status: "success",
  });
});

export default router;
