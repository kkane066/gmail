/** @format */

import React from "react";
import "./App.css";
import Header from "./app/Header.js";
import Sidebar from "./app/Sidebar.js";
import Routers from "./app/Routers.js";
import SendMail from "./app/SendMail.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routers />
      </div>
      <SendMail />
    </div>
  );
}

export default App;
