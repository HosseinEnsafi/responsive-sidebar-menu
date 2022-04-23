import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="min-h-screen min-w-full">
        {/* ============== SIDEBAR ==============*/}
        <Sidebar />
      </div>
    </>
  );
};

export default App;
