import { useContext, useRef } from "react";
import { RouteContext } from "@/contexts/routeContext";
import useTutorial from "./useTutorial";

const useHome = () => {
  const props = useContext(RouteContext);
  const { handleFinishTutorial } = props;
  const tourRef = useRef(false);
  useTutorial("home", tourRef, handleFinishTutorial);

  return {
    ...props,
  };
};

export default useHome;
