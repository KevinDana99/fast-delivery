import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { RouteInfo } from "@/app/welcome/types";

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

  useEffect(() => {
    if (!map || !start || !end || start.length !== 2 || end.length !== 2)
      return;

    if (controlRef.current) {
      map.removeControl(controlRef.current);
    }

    controlRef.current = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      show: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      routeWhileDragging: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: "#267ECA", weight: 6 }],
      },
    })
      .on("routesfound", function (e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        const distance = summary.totalDistance / 1000;
        const time = summary.totalTime / 60;
        const instructions = routes[0].instructions;

        instructions.forEach((step: any, index: number) => {
          console.log(`${index + 1}: ${step.text}`);
        });

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
