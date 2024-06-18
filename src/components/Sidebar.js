import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

function Sidebar() {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="crypto">
                Crypto

            </a>
        </Menu>
    );
};

export default Sidebar;
