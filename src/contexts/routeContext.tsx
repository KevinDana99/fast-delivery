import { LocationType, RouteInfo } from "@/app/types";
import { useRouter } from "next/navigation";
import React, { ReactNode, createContext, useState } from "react";

export const RouteContext = createContext<{
  infoLocation: LocationType[];
  routeInfo: RouteInfo;
  setInfoLocation: React.Dispatch<React.SetStateAction<LocationType[]>>;
  setRouteInfo: React.Dispatch<React.SetStateAction<RouteInfo>>;
  handleFinishTutorial: () => void;
  handleChangePage: (route: string) => void;
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
  const router = useRouter();
  const handleChangePage = (route: string) => {
    router.push(route);
  };
  return (
    <RouteContext.Provider
      value={{
        infoLocation,
        routeInfo,
        setInfoLocation,
        setRouteInfo,
        handleFinishTutorial,
        handleChangePage,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
