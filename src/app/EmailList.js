/** @format */

import React from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Checkbox } from "@mui/material";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

export default EmailList;
