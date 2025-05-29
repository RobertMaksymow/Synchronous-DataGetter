import mongoose from "mongoose";
import Portfolio from "../modelsDB/Portfolio_model.js";

// GET all portfolio trades
export const getPortfolioTrades = async (req, res) => {
  try {
    const portfolioTrades = await Portfolio.find().sort({ createdAt: -1 });
    res.status(200).json(portfolioTrades);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a single portfolio trade by ID
export const getPortfolioTradeById = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such trade ID" });
  }
  // Search database for the portfolio trade with the given ID
  try {
    const portfolioTrade = await Portfolio.findById(id);
    if (!portfolioTrade) {
      return res
        .status(404)
        .json({ error: "Portfolio trade not found in Database" });
    }
    res.status(200).json(portfolioTrade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST a new portfolio trade
export const createPortfolioTrade = async (req, res) => {
  const { transactionType, price, quantity, totalValue, coin, priceInBTC } =
    req.body;

  // Add to database
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
};

// DELETE a portfolio trade by ID
export const deletePortfolioTrade = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such trade ID" });
  }

  // Delete the portfolio trade with the given ID
  try {
    const portfolioTrade = await Portfolio.findByIdAndDelete({ _id: id });
    if (!portfolioTrade) {
      return res
        .status(404)
        .json({ error: "Portfolio trade not found in Database" });
    }

    res.status(200).json(portfolioTrade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH a portfolio trade by ID
export const updatePortfolioTrade = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such trade ID" });
  }

  // Update the portfolio trade with the given ID
  try {
    const portfolioTrade = await Portfolio.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!portfolioTrade) {
      return res
        .status(404)
        .json({ error: "Portfolio trade not found in Database" });
    }

    res.status(200).json(portfolioTrade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export all functions for use in routes
export default {
  getPortfolioTrades,
  getPortfolioTradeById,
  createPortfolioTrade,
  deletePortfolioTrade,
  updatePortfolioTrade,
};
