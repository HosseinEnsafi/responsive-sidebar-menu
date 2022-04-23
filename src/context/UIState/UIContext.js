import { createContext, useReducer } from "react";
import UIReducer from "./UIReducer";

export const UIContext = createContext();

const initialValue = {
  isFull: false,
  isNavOpen: false,
};

export const UIProvider = ({ children }) => {
  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };
  const toggleFull = () => {
    dispatch({ type: "TOGGLE_FULL" });
  };

  const [state, dispatch] = useReducer(UIReducer, initialValue);
  return (
    <UIContext.Provider
      value={{
        toggleMenu,
        toggleFull,
        isNavOpen: state.isNavOpen,
        isFull: state.isFull,
      }}>
      {children}
    </UIContext.Provider>
  );
};
