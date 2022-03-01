/** @format */

import React from "react";
import Mail from "./Mail.js";
import EmailList from "./EmailList";
import "./Routers.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Routers() {
  return (
    <div className="routers">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
