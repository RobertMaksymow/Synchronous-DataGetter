import React, { useState } from "react";

const PortfolioForm = () => {
  const [transactionType, setTransactionType] = useState("buy");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [coin, setCoin] = useState("BTC");
  const [priceInBTC, setPriceInBTC] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const portfolioItem = {
      transactionType,
      price,
      quantity,
      totalValue,
      coin,
      priceInBTC,
    };

    const response = fetch("http://localhost:5000/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(portfolioItem),
    });

    console.log("Portfolio Item Submitted:", portfolioItem);

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      console.error("Error creating portfolio item:", data.error);
    }
    if (response.ok) {
      setError(null);
      console.log("Portfolio item created successfully:", data);
      // Reset form fields after successful submission
      setTransactionType("buy");
      setPrice(0);
      setQuantity(0);
      setTotalValue(0);
      setCoin("BTC");
      setPriceInBTC(0);
    }
  };

  return (
    <div>
      <h2>Add Portfolio Item</h2>
      <form className="create" onSubmit={handleSubmit}>
        <div>
          <label>Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
            <option value="lp">Liquidity Pool</option>
            {/* FEATURE IDEA: When lp selected then rest of the form should change to fill up LP form details */}
          </select>
        </div>
        <div>
          <label>Coin:</label>
          <input
            type="text"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Total Value:</label>
          <input
            type="number"
            value={totalValue}
            onChange={(e) => setTotalValue(e.target.value)}
          />
        </div>
        <div>
          <label>Price in BTC:</label>
          <input
            type="number"
            value={priceInBTC}
            onChange={(e) => setPriceInBTC(e.target.value)}
          />
        </div>
        <button type="submit">Add to Portfolio</button>
      </form>
    </div>
  );
};

export default PortfolioForm;
