import React from "react";
import Image from "next/image";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { MAP_HEIGHT, MAP_WIDTH } from "@/constants";

const DuraInteractive = () => {
  return (
    <div>
      <MapContainer
        center={[34.747, 40.73]}
        zoom={15.5}
        scrollWheelZoom={false}
        style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ImageOverlay
          url="/dura.jpeg"
          bounds={[
            [34.756, 40.739],
            [34.737, 40.72],
          ]}
          opacity={0.6}
          zIndex={10}
        />
        <Marker position={[34.747, 40.73]}>
          <Popup>Center of Dura</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DuraInteractive;
