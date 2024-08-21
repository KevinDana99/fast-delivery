"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { RouteInfo } from "@/app/welcome/types";
import useLocation from "@/hooks/useLocation";
import getCustomIcon from "@/components/icons";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
const MapRoutingMachine = ({
  start,
  end,
  onRouteFound,
}: {
  start: number[];
  end: number[];
  onRouteFound?: ({ distance, time, instructions }: RouteInfo) => void;
}) => {
  const map = useMap();
  const controlRef = React.useRef<null | L.Routing.Control>(null);
  const myLocation = useLocation();
  useEffect(() => {
    if (!map || !start || !end || start.length !== 2 || end.length !== 2)
      return;

    if (controlRef.current) {
      map.removeControl(controlRef.current);
    }

    controlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(myLocation[0], myLocation[1]),
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1]),
      ],
      show: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: "#267ECA", weight: 6 }],
        extendToWaypoints: true,
        missingRouteTolerance: 10,
      },
      //@ts-ignore
      createMarker: function (i: number, waypoint: L.Routing.Waypoint, _) {
        // Usa el ícono personalizado solo en el primer waypoint
        if (i === 0) {
          return L.marker(waypoint.latLng, {
            icon: getCustomIcon({
              icon: (
                <SportsMotorsportsIcon
                  style={{ color: "red", fontSize: "30" }}
                />
              ),
            }),
          });
        }
        // Usa el ícono por defecto para los otros waypoints
        return L.marker(waypoint.latLng);
      },
    })
      .on("routesfound", function (e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        const distance = summary.totalDistance / 1000;
        const time = summary.totalTime / 60;
        const instructions = routes[0].instructions;

        if (onRouteFound) {
          onRouteFound({ distance, time, instructions });
        }
      })

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
