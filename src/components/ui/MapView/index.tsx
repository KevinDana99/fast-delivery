"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Container, Icon, Metrics, Tag as StyledTag } from "./styled";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapClickHandler from "./MapClickHandler";
import MapRoutingMachine from "./MapRoutingMachine";
import { LocationType, RouteInfo } from "@/app/welcome/types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import useLocation from "@/hooks/useLocation";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const Tag = ({
  title,
  label,
  icon,
}: {
  title: string;
  label: string;
  icon: JSX.Element;
}) => {
  return (
    <StyledTag>
      <Icon>
        <span>{icon}</span>
      </Icon>
      <span>{title}</span>
    </StyledTag>
  );
};

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
  const [currentLocation, setCurrentLocation] = useState<{
    info: string;
    marker: number[];
  } | null>(null);
  const getCurrentMarkerLocationInfo = async (latlng: L.LatLng) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json&addressdetails=1`
    );
    const data = await response.json();

    return data.address
      ? `${data.address.road} ${data.address.house_number ?? ""}, ${
          data.address.city.split(" ")[2]
        } ${data.address.city.split(" ")[3]}, ${data.address.country}`
      : "Dirección no disponible";
  };

  const handleMapClick = async (latlng: L.LatLng) => {
    const infoLocation = await getCurrentMarkerLocationInfo(latlng);

    setCurrentLocation({
      info: infoLocation,
      marker: [latlng.lat, latlng.lng],
    });
  };

  useEffect(() => {
    if (locationInfo.length >= 2) {
      setInfoLocation([]);
    }
    setInfoLocation((prevLocation) => [...prevLocation, currentLocation]);
  }, [currentLocation]);

  const calculatePrice = (dist: number, pricePerKm: number) => {
    const distance = Math.round(Math.round(dist) * pricePerKm);
    return distance;
  };
  return (
    <Container>
      <MapContainer
        center={[-42.774434, -65.039204]}
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

        <Marker position={locationInfo[0]?.marker ?? [0, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={locationInfo[1]?.marker ?? [0, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <MapRoutingMachine
          start={locationInfo[0]?.marker ?? undefined}
          end={locationInfo[1]?.marker ?? undefined}
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
          label="Price"
        />
        <Tag
          icon={<TimelineIcon />}
          title={routeInfo?.time ? `${Math.round(routeInfo.distance)} Km` : ""}
          label="Distancia"
        />
        <Tag
          icon={<AccessTimeIcon />}
          title={routeInfo?.time ? `${Math.round(routeInfo.time)} min` : ""}
          label="Tiempo"
        />
      </Metrics>
    </Container>
  );
};

export default MapView;
