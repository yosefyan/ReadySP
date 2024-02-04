import { useContext, useState } from "react";
import DynamicContext from "./DynamicContext";
import { TTypicalChildren } from "../types/componentTypes";

const AuthProvider = ({ children }: TTypicalChildren) => {
  const [tokenData, setTokenData] = useState({
    empty: true,
    user: null,
    role: "Ghost",
  });
  const [shouldLogout, setShouldLogout] = useState(true);
  useContext(DynamicContext);
  const contextValue = {
    tokenData,
    setTokenData,
    shouldLogout,
    setShouldLogout,
  };
  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default AuthProvider;
