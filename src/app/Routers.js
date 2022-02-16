/** @format */

import React from "react";
import Mail from "./Mail.js";
import EmailList from "./EmailList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from "@mui/material";

function Routers() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<EmailList />} />
        <Route path="/Mail" element={<Mail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
