import React, { useContext, useEffect, useState } from "react";

import { useFetch } from "./useFetch";
const AppContext = React.createContext();
const url = "https://course-api.com/react-store-products";

const AppProvider = ({ children }) => {
  const { data, isLoading, isError } = useFetch(url);

  return (
    <AppContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
