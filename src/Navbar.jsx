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
                
                <div className="select-animation-type"> 
                    <label htmlFor="animation">Map</label>
                    <select id="animation" value={selectedMap} onChange={handleAnimationChange}>
                        <option value="all">All</option>
                        <option value="2017">2017</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            </div>
        </div>
    );
}