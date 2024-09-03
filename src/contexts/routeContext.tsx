import { LocationType, RouteInfo } from "@/app/types";
import React, { ReactNode, createContext, useState } from "react";

export const RouteContext = createContext<{
  infoLocation: LocationType[];
  routeInfo: RouteInfo;
  setInfoLocation: React.Dispatch<React.SetStateAction<LocationType[]>>;
  setRouteInfo: React.Dispatch<React.SetStateAction<RouteInfo>>;
  handleFinishTutorial: () => void;
}>(null);

export const RouteProvider = ({
  children,
  handleFinishTutorial,
}: {
  children: ReactNode;
  handleFinishTutorial: () => void;
}) => {
  const [infoLocation, setInfoLocation] = useState<LocationType[]>([]);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);

  return (
    <RouteContext.Provider
      value={{
        infoLocation,
        routeInfo,
        setInfoLocation,
        setRouteInfo,
        handleFinishTutorial,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
