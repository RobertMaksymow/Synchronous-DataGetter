import React from "react";

const PortfolioDataDetailsCard = ({ data }) => {
  console.log("Portfolio Data Details Card:", data);

  return (
    <div>
      <h3>{data.coin}</h3>
      <p>Transaction Type: {data.transactionType}</p>
      <p>Value: ${data.price}</p>
      <p>Quantity: {data.quantity}</p>
      <p>Total Value: ${data.totalValue}</p>
      <p>Price in BTC: {data.priceInBTC}</p>
      <p>
        Date:{" "}
        {new Date(data.date).toLocaleDateString("en-GB", {
          timeZone: "UTC",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </p>
    </div>
  );
};

export default PortfolioDataDetailsCard;
