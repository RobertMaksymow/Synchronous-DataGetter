import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome User</h1>
      <p>
        Here is the main dashboard that displays a summary of your portfolio and
        current trade performance.
      </p>

      <p>
        Your portfolio value: $70,000{" "}
        <span>(Cost: $66,500 Profit: $3,500 // +5.2% )</span>
      </p>

      <div className="portfolio-summary">
        <h2>Portfolio Summary</h2>
        <p>Total Trades: 150</p>
        <p>Winning Trades: 90</p>
        <p>Losing Trades: 60</p>
      </div>
      <div>
        <h2>Synchronous Analytics:</h2>
        <p>Consider buying BTC</p>
        <p>Consider selling ETH</p>
        <p>Consider holding XMR</p>
      </div>
    </div>
  );
};

export default Home;
