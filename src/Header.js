import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import logo from './images/logo.png'
// import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <a href='https://brb.jackjona.live'>
                <img
                    className="header__icon"
                    src={logo}
                    alt="Logo"
                />
            </a>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
