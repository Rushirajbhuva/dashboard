import React from "react";

export default function DashboardLayout(){
    return (
    <div 
    id="app-dashboard-layout-container" 
    className="app-dashboard-layout-container"
    >
        <div  id="sidebar" classname="app-sidebar" >
        <div className="branding" id="branding">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Swiggy_Text_Logo.png"
            alt="logo"
        />
        </div>
        </div>
        <div id="app-content-area"></div>
    </div>
    );
};