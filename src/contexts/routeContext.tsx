import { LocationType, RouteInfo } from "@/app/types";
import useLocation from "@/hooks/useLocation";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, createContext, useState } from "react";

export const RouteContext = createContext<{
  infoLocation: LocationType[];
  routeInfo: RouteInfo;
  myLocation: number[];
  originLocation: number[];
  destinationLocation: number[];
  shipmentId: string;
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
  const searchParams = useSearchParams();
  const coordsParam = atob(searchParams.get("coords")).split(",");
  const shipmentId = searchParams.get("shipment") ?? "";
  const COORDS = coordsParam.map((coord) => parseFloat(coord));
  const VERIFY_COORDS = COORDS.length > 1;
  const [infoLocation, setInfoLocation] = useState<LocationType[]>(
    VERIFY_COORDS
      ? [
          { info: "", marker: [COORDS[0], COORDS[1]] },
          { info: "", marker: [COORDS[2], COORDS[3]] },
        ]
      : []
  );
  const originLocation = [
    infoLocation[0]?.marker[0],
    infoLocation[0]?.marker[1],
  ];
  const destinationLocation = [
    infoLocation[1]?.marker[0],
    infoLocation[1]?.marker[1],
  ];

  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const myLocation = useLocation();
  return (
    <RouteContext.Provider
      value={{
        infoLocation,
        routeInfo,
        myLocation,
        originLocation,
        destinationLocation,
        shipmentId,
        setInfoLocation,
        setRouteInfo,
        handleFinishTutorial,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
