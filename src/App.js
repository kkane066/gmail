/** @format */

import React from "react";
import "./App.css";
import Header from "./app/Header.js";
import Sidebar from "./app/Sidebar.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes></Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
