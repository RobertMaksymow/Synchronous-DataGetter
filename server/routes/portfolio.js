import express from "express";

import {
  getPortfolioTrades,
  getPortfolioTradeById,
  createPortfolioTrade,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getPortfolioTrades);

router.get("/:id", getPortfolioTradeById);

router.post("/", createPortfolioTrade);

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
