import React, { useEffect, useState } from "react";
import PortfolioDataDetailsCard from "../components/PortfolioDataDetailsCard";
import PortfolioForm from "../components/PortfolioForm";

import { usePortfolioContext } from "../hooks/usePortfolioContext";

const Portfolio = () => {
  const { portfolioData, dispatch } = usePortfolioContext(); // Ensure context is used to trigger re-renders if needed
  // const [portfolioData, setPortfolioData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/portfolio");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataAsJson = await response.json();
        if (response.ok) {
          dispatch({ type: "SET_PORTFOLIO", payload: dataAsJson });
        }
        console.log("Portfolio data:", dataAsJson);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setError(error);
      }
    };
    fetchPortfolioData();
  }, []);

  return (
    <div className="">
      <h2>Portfolio page shows all your active trades</h2>
      <div className="">
        {portfolioData &&
          portfolioData.map((item) => (
            <PortfolioDataDetailsCard key={item._id} data={item} />
          ))}
      </div>
      {error && <p className="error">Error: {error.message}</p>}
      <PortfolioForm />
    </div>
  );
};

export default Portfolio;
