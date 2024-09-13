"use client";
import React, { useEffect, useState } from "react";
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
import { useRouter, useParams, useSearchParams } from "next/navigation";
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
  const map = useMap();
  const controlRef = React.useRef<null | L.Routing.Control>(null);
  const myLocation = useLocation();
  const startInitialValue = start && L.latLng(start[0], start[1]);
  const endInitialValue = end && L.latLng(end[0], end[1]);
  const myLocationInitialValue =
    myLocation && L.latLng(myLocation[0], myLocation[1]);
  const waypoints: L.LatLng[] = [
    myLocationInitialValue,
    startInitialValue,
    endInitialValue,
  ];

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
    if (controlRef.current) {
      map.removeControl(controlRef.current);
    }

    controlRef.current = L.Routing.control({
      waypoints,
      show: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: theme.main.color, weight: 6 }],
        extendToWaypoints: true,
        missingRouteTolerance: 10,
      },
      //@ts-ignore
      createMarker: function (i: number, waypoint: L.Routing.Waypoint, _) {
        if (i === 0) {
          return L.marker(waypoint.latLng, {
            icon: getCustomIcon({
              icon: (
                <SportsMotorsportsIcon
                  style={{ color: theme.colors.primary, fontSize: "38" }}
                />
              ),
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
        map.removeControl(controlRef.current);
      }
    };
  }, [map, start, end]);

  return null;
};

export default MapRoutingMachine;
