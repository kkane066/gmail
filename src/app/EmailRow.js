/** @format */

import { Checkbox, IconButton } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useNavigate();
  return (
    <div onClick={() => history("/mail")} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
}

export default EmailRow;
