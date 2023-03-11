import React, { useReducer, useState, useEffect } from "react";
import { useContext } from "react";
import reducer from "./reducer";
import data from "../data/data";

const initialState = {
  cart: [],
  isModalOpen: false,
  modalContent: [],
  aboutContent: [],
  cartsContent: JSON.parse(localStorage.getItem("eachCart")) || [],
  amount: 0,
  total: 0,
};

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("eachCart", JSON.stringify(state.cartsContent));
  }, [state.cartsContent]);

  useEffect(() => {
    dispatch({ type: "SHOW_CARTS", payload: data });
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cartsContent]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("eachCart")).forEach((element) => {
      if (element.inCart === true) {
        dispatch({ type: "IS_IN_CART", payload: data, id: element.id });
      }
    });
  }, [localStorage]);

  const openModal = (id) => {
    dispatch({ type: "OPEN_MODAL", payload: id });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const about = (id) => {
    dispatch({ type: "ABOUT", payload: id });
  };

  const getCarts = (id) => {
    dispatch({ type: "GET_CARTS", payload: id });
  };

  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: data, id: id });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL", payload: data });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        about,
        getCarts,
        removeCart,
        clearAll,
        increase,
        decrease,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
