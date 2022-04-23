import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UIProvider } from "./context/UIState/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIProvider>
    <App />
  </UIProvider>
);
