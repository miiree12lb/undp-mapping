import React, {useState} from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore
import Navbar from './Navbar.jsx';
//@ts-ignore
import "./css/style.css";
//@ts-ignore
import ProportionalSymbolMap from './ProportionalSymbolMap.jsx';
import map2017 from "./assets/2017.png";
import map2021 from "./assets/2021.png";
import map2022 from "./assets/2022.png";
import logo from "./assets/logo.png";

function Root() {
    const [selectedMap, setSelectedMap] = useState("all");
    return(
        <BrowserRouter>
            <Navbar selectedMap={selectedMap} setSelectedMap={setSelectedMap}/>

            <div>
                <h1>Introduction</h1>
                <p>
                    In this website three maps are displayed, each map representing Gross National Income Per Capita, of men in Africa from a different year: 2017, 2021, and 2022. 
                    The data was obtained from the United Nations Development Programme. The downloaded data had information regarding many features from different years.
                    It was statistically analyzed to select a feature to map in 3 different years. Each year of each feature was a column in the data and were ordered
                    by the variance (for all around the world, not just Africa). The top three columns were 
                    'Gross National Income Per Capita, male' in 2022, 2021, and 2017. Below you can see the three maps. In the navbar you can filter the map to 
                    be displayed.
                </p>

                <h1>Map Symbology</h1>
                <p>
                    The data mapped is quantitative in a ratio, relative form. There are several ways to representing such data in a map, the proportional symbol map is among them.
                    Since data is at a country level, each country in Africa represents a point. Then a circle of varying size can represent the Gross National Income per Capital of 
                    men for each country. Since there isn't much overlap between the symbols, the map is easy to follow. This is the main reason why the full world was not represented in
                    the maps.
                </p>

                <h1>Gross National Income Per Capita (male)</h1>
                {(selectedMap === "all" || selectedMap === "2017") && <div className='map'>
                    <h2>2017</h2>
                    <div>
                        <ProportionalSymbolMap year={2017}/>
                    </div>
                </div>}

                {(selectedMap === "all" || selectedMap === "2021") && <div className='map'>
                    <h2>2021</h2>
                    <div><ProportionalSymbolMap year={2021}/></div>
                </div>}

                {(selectedMap === "all" || selectedMap === "2022") && <div className='map'>
                    <h2>2022</h2>
                    <div><ProportionalSymbolMap year={2022}/></div>
                </div>}
            </div>

            <div id="footer">
                <div>
                    <img src={logo} alt="Logo" width={80} height={80} />
                </div>
                <div id="footer-text">
                    <p>Mireia Lopez Bruch (s2939142)</p>
                    <p>14/01/2025</p>
                </div>
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root/>);
}