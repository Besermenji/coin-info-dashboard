import React, { useContext } from "react";
import { ApiClient } from "../api/ApiClient";

export const ApiContext = React.createContext({
  client: new ApiClient(),
});

export const ApiProvider = ({ children }) => {
  const client = new ApiClient();

  return (
    <ApiContext.Provider value={{ client }}>{children}</ApiContext.Provider>
  );
};

export const useProtonChainAPI = () => {
  const context = useContext(ApiContext);
  return context;
};
