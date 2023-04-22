import React from "react";

function WelcomeMsg(props) {
    return (
        <div class="flex-container">
            <div class="welcomeMsg">{props.name}</div>
            <div class="sectionTitle">{props.section}</div>

        </div>
    );
}

export default WelcomeMsg;