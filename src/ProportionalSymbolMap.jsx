import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Popup } from "react-leaflet";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";
import file2017 from "./assets/data/joined2017.csv";
import file2021 from "./assets/data/joined2021.csv";
import file2022 from "./assets/data/joined2022.csv";

const ProportionalSymbolMap = ({ year }) => {
  const [data, setData] = useState([]);
  const fileMapping = {
    2017: file2017,
    2021: file2021,
    2022: file2022,
  };
  const columnName = `gni_pc_m_${year}`;
  const csvData = fileMapping[year];

  useEffect(() => {
    if (csvData) {
      Papa.parse(csvData, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => setData(result.data),
      });
    }
  }, [csvData]);

  const scaleSize = (value) => Math.sqrt(value) / 10; // Adjust as necessary

  return (
    <MapContainer
      style={{ height: "500px", width: "100%" }}
      center={[0, 20]} // Coordinates for Africa
      zoom={3}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((row, index) => {
        const lat = parseFloat(row.LABEL_Y);
        const lng = parseFloat(row.LABEL_X);
        const gni = parseFloat(row[columnName]);

        if (isNaN(lat) || isNaN(lng) || isNaN(gni)) return null;

        return (
          <CircleMarker
            key={index}
            center={[lat, lng]}
            radius={scaleSize(gni)}
            color="blue"
            fillOpacity={0.6}
          >
            <Popup>
              <strong>{row.SOV_A3}</strong>
              <br />
              GNI per Capita (Male): {gni} PPP($)
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default ProportionalSymbolMap;
