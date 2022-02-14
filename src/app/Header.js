import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, requirePropFactory } from '@mui/material';
import Image from './images/gmail.svg.png';



function Header() {
    return ( 
        <div className="header">
        <div className="header__left">
    <IconButton>
        <MenuIcon/>
    </IconButton>
    <img src= {Image} alt="logo" />
        </div>
        <div className="header__middle"> </div>
        <div className="header__right"> </div>
        </div>
     );
}

export default Header ;
