import React, { useState, createContext, useContext } from "react";
import {
  initialCartItems,
  initialIsCartOpen,
  initialIsLogin,
  initialIsSidebarOpen,
  initialTotalQuantities,
  initialQty,
  initialValue,
} from "./state";

export const StateContext = createContext(initialValue);

type ThemeContextProvider = {
  children: React.ReactNode;
};

export const StateContextProvider = ({ children }: ThemeContextProvider) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isCartOpen, setIsCartOpen] = useState(initialIsCartOpen);
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialIsSidebarOpen);
  const [totalQuantities, setTotalQuantities] = useState(
    initialTotalQuantities
  );
  const [qty, setQty] = useState(initialQty);

  const toggleSidebar = () => {
    if (isCartOpen) setIsCartOpen(false);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCart = () => {
    if (isSidebarOpen) setIsSidebarOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  const authLogin = () => {
    setIsLogin(true);
  };

  const authLogout = () => {
    setIsLogin(false);
  };

  const changedValue = {
    initialCartItems: cartItems,
    initialIsCartOpen: isCartOpen,
    initialIsLogin: isLogin,
    initialIsSidebarOpen: isSidebarOpen,
    initialTotalQuantities: totalQuantities,
    initialQty: qty,
  };

  return (
    <StateContext.Provider
      value={{
        ...changedValue,
        toggleSidebar,
        toggleCart,
        authLogin,
        authLogout,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
