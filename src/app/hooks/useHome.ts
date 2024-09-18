import { useContext, useRef } from "react";
import { RouteContext } from "@/contexts/routeContext";
import useTutorial from "./useTutorial";
import { ModalContext } from "@/contexts/modalContext";
import { AuthContext } from "@/contexts/authConext";

const useHome = () => {
  const { shipmentId } = useContext(AuthContext);
  const routeProps = useContext(RouteContext);
  const { showTutorial, handleShowTutorial, handleShowPwaModals } =
    useContext(ModalContext);

  const tourRef = useRef(false);

  useTutorial(
    "home",
    tourRef,
    showTutorial,
    handleShowTutorial,
    handleShowPwaModals
  );

  return {
    ...routeProps,
    shipmentId,
  };
};

export default useHome;
