import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, requirePropFactory } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from './images/gmail.svg.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


function Header() {
    return ( 
        <div className="header">
        <div className="header__left">
    <IconButton>
        <MenuIcon/>
    </IconButton>
    <img src= {Image} alt="logo" />
        </div>
        <div className="header__middle"> 
        <SearchIcon />
        <input placeholder="Search mail" type="text"/>
        <ArrowDropDownIcon className="header__inputCaret"/>
        </div>
        <div className="header__right">
        <IconButton>
            <AppsIcon/>
        </IconButton>
        <IconButton>
            <NotificationsIcon/>
        </IconButton>
        <Avatar/>
        </div>
        </div>
     );
}

export default Header ;
