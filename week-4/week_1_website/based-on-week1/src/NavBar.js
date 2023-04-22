import React from "react";

function NavBar() {
    return (
        <div class="topnav" id="miniSize">
            <span>Welcome to My page</span>
            <a id="home" class="active" href="#home">Home</a>
            <a id="news" href="#news">News</a>
            <a id="contact" href="#contact">Contact</a>
            <a id="about" href="#about">About</a>
            <div id="demo" onclick="myFunction()">
                <b></b><br />
                <b></b><br />
                <b></b>
            </div>
        </div>
    );
}

export default NavBar;