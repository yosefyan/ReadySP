import { useContext, useEffect } from "react";
import { Plans, Search, Sorting } from "./propertiesSections";
import DynamicContext from "../../../store/DynamicContext";
import useAutoLogin from "../../../hooks/useAutoLogin";

const PropertiesTab = () => {
 
  return (
    <div className="z-20 w-full lg:w-[30%] h-[90vh]">
      <Plans />
      <Search />
      <Sorting />
    </div>
  );
};

export default PropertiesTab;
