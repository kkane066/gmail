/** @format */

import React from "react";
import "./EmailList.css";
import { Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <ArrowDropDown />
          <RefreshIcon />
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default EmailList;
