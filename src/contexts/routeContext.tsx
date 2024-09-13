import { LocationType, RouteInfo } from "@/app/types";
import useLocation from "@/hooks/useLocation";
import React, { ReactNode, createContext, useState } from "react";

export const RouteContext = createContext<{
  infoLocation: LocationType[];
  routeInfo: RouteInfo;
  myLocation: number[];
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
  const myLocation = useLocation();
  return (
    <RouteContext.Provider
      value={{
        infoLocation,
        routeInfo,
        myLocation,
        setInfoLocation,
        setRouteInfo,
        handleFinishTutorial,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
