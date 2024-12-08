"use client";

import React, { useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { GiPeaceDove } from "react-icons/gi";
import "mapbox-gl/dist/mapbox-gl.css";
import MapPopup from "./map-popup";

const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const CustomMap = () => {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapToken}
      initialViewState={{
        longitude: 115.1480162,
        latitude: -8.6355522,
        zoom: 12,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {showPopup && (
        <Popup
          latitude={-8.6355522}
          longitude={115.1480162}
          anchor="bottom"
          onClose={() => {
            setShowPopup(false);
          }}
          closeButton={false}
          className="mt-24"
        >
          <MapPopup />
        </Popup>
      )}

      <div onMouseEnter={() => setShowPopup(true)}>
        <Marker latitude={-8.6355522} longitude={115.1480162} anchor="bottom">
          <GiPeaceDove
            size={44}
            color="rgb(4 120 87 / var(--tw-bg-opacity, 0.9))"
          />
        </Marker>
      </div>
    </Map>
  );
};

export default CustomMap;
