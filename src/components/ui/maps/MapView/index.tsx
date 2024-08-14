"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Container, Metrics } from "./styled";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapClickHandler from "./MapClickHandler";
import MapRoutingMachine from "./MapRoutingMachine";
import { LocationType, RouteInfo } from "@/app/welcome/types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { LatLngTuple } from "leaflet";
import useMapView from "./hooks/useMapView";
import Tag from "../../tags/Tag";
import { LatLngExpression } from "leaflet";

const center_map: LatLngExpression = [-42.774434, -65.039204];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const MapView = ({
  setInfoLocation,
  locationInfo,
  setRouteInfo,
  routeInfo,
}: {
  locationInfo: LocationType[];
  setInfoLocation: React.Dispatch<React.SetStateAction<LocationType[]>>;
  setRouteInfo: React.Dispatch<React.SetStateAction<RouteInfo | null>>;
  routeInfo: RouteInfo | null;
}) => {
  const { handleMapClick, calculatePrice } = useMapView(
    locationInfo,
    setInfoLocation
  );

  return (
    <Container>
      <MapContainer
        center={center_map}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        dragging
        minZoom={13}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapRoutingMachine
          start={locationInfo[0]?.marker}
          end={locationInfo[1]?.marker}
          onRouteFound={(info) => setRouteInfo(info)}
        />
        <MapClickHandler onMapClick={handleMapClick} />
      </MapContainer>
      <Metrics>
        <Tag
          icon={<AttachMoneyIcon />}
          title={
            routeInfo?.distance
              ? calculatePrice(routeInfo?.distance, 550).toString()
              : ""
          }
        />
        <Tag
          icon={<TimelineIcon />}
          title={routeInfo?.time ? `${Math.round(routeInfo.distance)} Km` : ""}
        />
        <Tag
          icon={<AccessTimeIcon />}
          title={routeInfo?.time ? `${Math.round(routeInfo.time)} min` : ""}
        />
      </Metrics>
    </Container>
  );
};

export default MapView;

/*

        <Marker position={(locationInfo[0]?.marker as LatLngTuple) ?? [0, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={(locationInfo[1]?.marker as LatLngTuple) ?? [0, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        */
