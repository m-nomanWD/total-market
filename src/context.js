import React, { useContext, useEffect, useState, useReducer } from "react";
import { reduce } from "./reduce";
import { useFetch } from "./useFetch";
import { mainData } from "./data";
import { type } from "@testing-library/user-event/dist/type";
const AppContext = React.createContext();
const url = "https://course-api.com/react-store-products";

const AppProvider = ({ children }) => {
  const { data, isLoading, isError } = useFetch(url);
  const [isAlertShow, setIsAlertShow] = useState(true);
  const defaultState = {
    cart: [],
    data: [],
    wishlistItems: [],
    filterList: [],
    total: 0,
    cartItem: 0,
    singleCounter: 0,
    cartCounter: 0,
    wishlistCounter: 0,
    alertState: false,
    alertMsg: "",
    alertClass: "",
    showModalProduct: false,
    quickShowProduct: {},
    isAlertShow: false,
  };

  const [state, dispatch] = useReducer(reduce, defaultState);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: data });
    console.log(data);
  }, [data]);

  const categories = data.reduce(
    (cur, item) => {
      if (!cur.includes(item.category)) {
        cur.push(item.category);
      }
      return cur;
    },
    ["all"]
  );

  return (
    <AppContext.Provider
      value={{
        data,
        isLoading,
        isError,
        categories,
        dispatch,
        state,
        isAlertShow,
        setIsAlertShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
