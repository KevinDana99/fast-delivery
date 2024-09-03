import { useContext } from "react";
import { RouteContext } from "@/contexts/routeContext";

const useHome = () => {
  const {
    infoLocation,
    routeInfo,
    setInfoLocation,
    setRouteInfo,
    handleFinishTutorial,
  } = useContext(RouteContext);

  console.log(infoLocation);
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
    handleFinishTutorial,
    routeInfo,
    originLocation,
    destinationLocation,
  };
};

export default useHome;
