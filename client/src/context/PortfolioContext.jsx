import { createContext, useReducer } from "react";

export const PortfolioContext = createContext({});

export const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "SET_PORTFOLIO":
      return { portfolioData: action.payload };
    case "CREATE_TRADE":
      return { portfolioData: [action.payload, ...state.portfolioData] };
    case "DELETE_TRADE":
      return {
        ...state,
        portfolioData: state.portfolioData.filter(
          (trade) => trade._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const PortfolioContextProvider = ({ children }) => {
  // You can add state and functions here to manage portfolio data
  // For example, you might want to fetch portfolio data from an API
  // and provide it to the components that consume this context.

  const [state, dispatch] = useReducer(portfolioReducer, {
    portfolio: null,
  });

  return (
    <PortfolioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  );
};
