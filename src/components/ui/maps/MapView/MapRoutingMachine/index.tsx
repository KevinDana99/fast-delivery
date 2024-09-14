"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { RouteInfo } from "@/app/types";
import useLocation from "@/hooks/useLocation";
import getCustomIcon from "@/components/icons";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import theme from "@/globals/theme";
import { RouteContext } from "@/contexts/routeContext";

const initValue = null;
const MapRoutingMachine = ({
  start = initValue,
  end = initValue,
  onRouteFound,
}: {
  start: number[];
  end: number[];
  onRouteFound?: ({ distance, time, instructions }: RouteInfo) => void;
}) => {
  const { myLocation } = useContext(RouteContext);
  const map = useMap();
  const controlRef = React.useRef<null | L.Routing.Control>(null);
  const startInitialValue = start && L.latLng(start[0], start[1]);
  const endInitialValue = end && L.latLng(end[0], end[1]);
  const myLocationInitialValue =
    myLocation && L.latLng(myLocation[0], myLocation[1]);

  const waypoints: L.LatLng[] = [
    myLocationInitialValue,
    startInitialValue,
    endInitialValue,
  ];
  const locationMarkerRef = useRef(null);
  const handleRouteFound = (e: any) => {
    const routes = e.routes;
    const summary = routes[0].summary;
    const distance = summary.totalDistance / 1000;
    const time = Math.round(summary.totalTime / 60 + 10);
    const instructions = routes[0].instructions;

    if (onRouteFound) {
      onRouteFound({ distance, time, instructions });
    }
  };

  useEffect(() => {
    if (!map) {
      console.warn("El mapa aún no está listo.");
      return;
    }

    controlRef.current = L.Routing.control({
      waypoints: waypoints,
      show: true,
      fitSelectedRoutes: false,
      showAlternatives: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: theme.main.color, weight: 6 }],
        extendToWaypoints: true,
        missingRouteTolerance: 2,
      },
      //@ts-ignore
      createMarker: function (i: number, waypoint: L.Routing.Waypoint, _) {
        if (i === 0) {
          return L.marker(waypoint.latLng, {
            icon: getCustomIcon({
              icon: <></>,
            }),
          });
        }
        if (i === 1) {
          return L.marker(waypoint.latLng, {
            icon: getCustomIcon({
              icon: (
                <MyLocationIcon
                  style={{ color: theme.colors.primary, fontSize: "34" }}
                />
              ),
            }),
          });
        }
        if (i === 2) {
          return L.marker(waypoint.latLng, {
            icon: getCustomIcon({
              icon: (
                <LocationOnIcon
                  style={{ color: theme.colors.primary, fontSize: "38" }}
                />
              ),
            }),
          });
        }

        return L.marker(waypoint.latLng);
      },
    })
      .on("routesfound", handleRouteFound)
      .addTo(map);

    return () => {
      if (controlRef.current) {
        try {
          map.removeControl(controlRef.current);
          controlRef.current = null;
        } catch (error) {
          console.error("Error al remover el control del mapa:", error);
        }
      }
    };
  }, [map, start, end, theme.main.color]);

  useEffect(() => {
    if (locationMarkerRef.current) {
      map.removeLayer(locationMarkerRef.current);
    }

    if (myLocationInitialValue) {
      locationMarkerRef.current = L.marker(myLocationInitialValue, {
        icon: getCustomIcon({
          icon: (
            <SportsMotorsportsIcon
              style={{ color: theme.colors.primary, fontSize: "34" }}
            />
          ),
        }),
      }).addTo(map);
    }
  }, [myLocation]);

  return null;
};

export default MapRoutingMachine;
