import React from "react";
import logo from "./assets/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ selectedMap, setSelectedMap}) {
    const handleAnimationChange = (event) => {
        setSelectedMap(event.target.value);
    };

    return (
        <div className="navbar">
            <div id="nav-right">
                <div className="title">
                    <img src={logo} alt="logo" width={50} height={50}></img>
                    <h1>UNDP Mapping</h1>
                </div>
            </div>
        </div>
    );
}