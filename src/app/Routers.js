/** @format */

import React from "react";
import Mail from "./Mail.js";
import EmailList from "./EmailList";
import "./Routers.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routers() {
  return (
    <div className="routers">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/Mail" element={<Mail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
