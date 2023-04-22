import React from "react";
import SideBar from './SideBar';
import { useState } from 'react';
import './App.css';

function NavBar() {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div class="topnav" id="miniSize">
                <span>Welcome to My page</span>
                <a id="home" class="active" href="#home">Home</a>
                <a id="news" href="#news">News</a>
                <a id="contact" href="#contact">Contact</a>
                <a id="about" href="#about">About</a>
                <div id="demo" onClick={() => setToggle(!toggle)} >
                    <b></b><br />
                    <b></b><br />
                    <b></b>
                </div>

            </div>
            {toggle && (
                <SideBar />
            )}

        </div>
    );
}

export default NavBar;