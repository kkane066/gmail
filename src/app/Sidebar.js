/** @format */

import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton } from "@mui/material";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="Sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="Sidebar_compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={15} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={25} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={55} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={100} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={0} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={30} />

      <div className="SidebarFooter">
        <div className="SidebarFooter__Icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
