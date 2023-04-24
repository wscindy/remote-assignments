import React from "react";

function ContentBox(props) {
    return (
        <div className="box" id="box">
            <div className="items">{props.boxName}</div>
            <div className="items">{props.boxNameTwo}</div>
        </div>
    );
}

export default ContentBox;