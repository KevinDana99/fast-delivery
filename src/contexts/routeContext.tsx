import { LocationType, RouteInfo } from "@/app/types";
import { StatusShipmentType } from "@/components/ui/bars/StatusBar/types";
import useLocation from "@/hooks/useLocation";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { AuthContext } from "./authConext";

export const RouteContext = createContext<{
  infoLocation: LocationType[];
  routeInfo: RouteInfo;
  myLocation: number[];
  originLocation: number[];
  destinationLocation: number[];
  shipment: {
    id: string;
    status: StatusShipmentType["status"];
  };
  setInfoLocation: React.Dispatch<React.SetStateAction<LocationType[]>>;
  setRouteInfo: React.Dispatch<React.SetStateAction<RouteInfo>>;
  handleChangeShipmentStatus: (status: StatusShipmentType["status"]) => void;
  setShipment: React.Dispatch<
    React.SetStateAction<{
      id: string;
      status: StatusShipmentType["status"];
    }>
  >;
}>(null);

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const coordsParam = atob(searchParams.get("coords")).split(",");
  const { user, shipmentId } = useContext(AuthContext);
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

  const [shipment, setShipment] = useState<{
    id: string;
    status: StatusShipmentType["status"];
  }>({
    id: shipmentId,
    status: "pending",
  });

  const handleChangeShipmentStatus = (status: StatusShipmentType["status"]) => {
    setShipment({ ...shipment, status });
  };
  return (
    <RouteContext.Provider
      value={{
        infoLocation,
        routeInfo,
        myLocation,
        originLocation,
        destinationLocation,
        shipment,
        setInfoLocation,
        setRouteInfo,
        handleChangeShipmentStatus,
        setShipment,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
