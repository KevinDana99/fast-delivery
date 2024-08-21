import React, { useState } from "react";
import { LocationType, RouteInfo } from "../types";

const useWelcome = () => {
  const [infoLocation, setInfoLocation] = useState<LocationType[]>([]);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  console.log(infoLocation, "info-welcome");
  const originLocation = [
    infoLocation[0]?.marker[0],
    infoLocation[0]?.marker[1],
  ];
  const destinationLocation = [
    infoLocation[1]?.marker[0],
    infoLocation[1]?.marker[1],
  ];

  return {
    infoLocation,
    setInfoLocation,
    setRouteInfo,
    routeInfo,
    originLocation,
    destinationLocation,
  };
};

export default useWelcome;
