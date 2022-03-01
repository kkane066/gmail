/** @format */

import React from "react";
import "./App.css";
import Header from "./app/Header.js";
import Sidebar from "./app/Sidebar.js";
import Routers from "./app/Routers.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routers />
      </div>
    </div>
  );
}

export default App;
