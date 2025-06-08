import React from "react";
import { usePortfolioContext } from "../hooks/usePortfolioContext";

const PortfolioDataDetailsCard = ({ data }) => {
  console.log("Portfolio Data Details Card:", data);
  const { dispatch } = usePortfolioContext();

  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/portfolio/${data._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete portfolio item");
      }

      const deletedData = await response.json();

      console.log("Deleted portfolio item:", deletedData);

      if (response.ok) {
        dispatch({ type: "DELETE_TRADE", payload: deletedData });
      }
    } catch (error) {
      console.error("Error deleting portfolio item:", error);
    }
  };

  return (
    <div className="portfolio-details">
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
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default PortfolioDataDetailsCard;
