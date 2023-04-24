import React, { useState } from "react";

function WelcomeMsg(props) {
    const [welcom, setWelcom] = useState(true)

    function changeWelcome() {

        setWelcom(!welcom);

    }

    return (
        <div class="flex-container">
            <div class="welcomeMsg" onClick={changeWelcome}>{welcom ? "Welcome! It's week 4 ☺️" : "You just clicked it. 👆 Click again!"}</div>
            <div class="sectionTitle">{props.section}</div>

        </div>
    );
}

export default WelcomeMsg;