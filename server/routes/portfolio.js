import express from "express";

import {
  getPortfolioTrades,
  getPortfolioTradeById,
  createPortfolioTrade,
  deletePortfolioTrade,
  updatePortfolioTrade,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getPortfolioTrades);

router.get("/:id", getPortfolioTradeById);

router.post("/", createPortfolioTrade);

router.delete("/:id", deletePortfolioTrade);

router.patch("/:id", updatePortfolioTrade);

export default router;
