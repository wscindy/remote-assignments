import React from "react";

function ContentBox(props) {
    return (
        <div class="box" id="box">
            <div class="items">{props.boxName}</div>
            <div class="items">{props.boxNameTwo}</div>
        </div>
    );
}

export default ContentBox;