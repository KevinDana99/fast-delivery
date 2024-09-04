import { useContext, useRef } from "react";
import { RouteContext } from "@/contexts/routeContext";
import useTutorial from "./useTutorial";

const useHome = () => {
  const {
    infoLocation,
    routeInfo,
    setInfoLocation,
    setRouteInfo,
    handleFinishTutorial,
  } = useContext(RouteContext);

  const tourRef = useRef(false);
  useTutorial("home", tourRef, handleFinishTutorial);

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

export default useHome;
