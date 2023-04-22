import React from "react";

function CallToAction(props) {
    return (
        <div class="btn">
            <button class="btn_action">{props.btnName}</button>
        </div>
    );
}

export default CallToAction;