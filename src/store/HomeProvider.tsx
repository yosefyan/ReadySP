import { useState, useReducer, useEffect, ReactNode } from "react";
import { THomeProvider } from "../types/PagesTypes/homeTypes";
import DynamicContext from "./DynamicContext";
import { homeReducer, homeInitialState } from "../reducers/homeReducer";

const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);
  const [cards, setCards] = useState([]);
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);

  const contextValue: THomeProvider = {
    ...state,
    dispatch,
    setCards,
    cards,
    filteredData,
    searchInput,
    setFilteredData,
  };
  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default HomeProvider;
