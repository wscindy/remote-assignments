import React from "react";
import './App.css';
import { useState } from "react";

function SideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sidebarStyle = {
        display: isSidebarOpen ? "block" : "none"
    };


    return (

        <div className="sidebar" id="sidebar" style={sidebarStyle}>
            <closebtn id="closebtn" onClick={toggleSidebar}> X </closebtn>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
        </div>

    );
}

export default SideBar;