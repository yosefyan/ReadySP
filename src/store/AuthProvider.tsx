import { useState } from "react";
import DynamicContext from "./DynamicContext";

const AuthProvider = () => {
  const [login, setLogin] = useState({});

  const contextValue = {
    login,
    setLogin,
  };
  
  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default AuthProvider;
