import { useContext, useRef } from "react";
import { RouteContext } from "@/contexts/routeContext";
import useTutorial from "./useTutorial";
import { ModalContext } from "@/contexts/modalContext";

const useHome = () => {
  const routeProps = useContext(RouteContext);
  const { showTutorial, handleShowTutorial, handleShowPwaModals } =
    useContext(ModalContext);
  const tourRef = useRef(false);
  console.log(showTutorial);
  useTutorial(
    "home",
    tourRef,
    showTutorial,
    handleShowTutorial,
    handleShowPwaModals
  );

  return {
    ...routeProps,
  };
};

export default useHome;
