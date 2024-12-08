"use client";

import React, { useRef, useState } from "react";
import Map, { Marker, Popup, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapPopup from "./map-popup";
// import { FaHandHoldingHeart } from "react-icons/fa6";
import logo from "../../../public/logo.png";
import Image from "next/image";

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
          className="mt-[8.5rem] w-64 shadow-sm"
        >
          <MapPopup />
        </Popup>
      )}

      <div onMouseEnter={() => setShowPopup(true)}>
        <Marker latitude={-8.6355522} longitude={115.1480162} anchor="bottom">
          {/* <FaHandHoldingHeart className="text-3xl text-red-400" /> */}
          <Image src={logo} height={44} width={44} alt="dejavu logo" />
        </Marker>
      </div>
      <ScaleControl maxWidth={80} />
    </Map>
  );
};

export default CustomMap;
