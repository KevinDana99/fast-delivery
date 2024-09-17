import { useContext, useRef } from "react";
import { RouteContext } from "@/contexts/routeContext";
import useTutorial from "./useTutorial";

const useHome = () => {
  const {
    infoLocation,
    routeInfo,
    originLocation,
    destinationLocation,
    setInfoLocation,
    setRouteInfo,
    handleFinishTutorial,
  } = useContext(RouteContext);

  const tourRef = useRef(false);
  useTutorial("home", tourRef, handleFinishTutorial);

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
