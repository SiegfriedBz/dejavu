"use client";

import React, { useEffect, useRef, useState } from "react";
import Map, { MapRef, Marker, Popup, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapPopup from "./map-popup";
// import { FaHandHoldingHeart } from "react-icons/fa6";
import logo from "../../../public/logo.png";
import Image from "next/image";

const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const CENTER = {
  longitude: 115.15,
  latitude: -8.645,
};

const CustomMap = () => {
  const mapRef = useRef<MapRef | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (mapRef?.current == null || !showPopup) return;

    mapRef?.current?.flyTo({
      center: [CENTER.longitude, CENTER.latitude + 0.015],
      duration: 2000,
      zoom: 12,
    });
  }, [showPopup]);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapToken}
      initialViewState={{
        ...CENTER,
        zoom: 12,
      }}
      style={{ width: "100%", height: 380 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {showPopup && (
        <Popup
          latitude={-8.6195}
          longitude={115.15}
          anchor="bottom"
          onClose={() => {
            setShowPopup(false);
          }}
          closeButton={false}
          className="mt-[8.5rem] shadow-sm"
        >
          <MapPopup />
        </Popup>
      )}

      <div onMouseEnter={() => setShowPopup(true)}>
        <Marker latitude={-8.645} longitude={115.15} anchor="bottom">
          {/* <FaHandHoldingHeart className="text-3xl text-red-400" /> */}
          <Image src={logo} height={44} width={44} alt="dejavu logo" />
        </Marker>
      </div>
      <ScaleControl maxWidth={80} />
    </Map>
  );
};

export default CustomMap;
