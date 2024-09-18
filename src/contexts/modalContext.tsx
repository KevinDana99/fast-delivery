import PushNotification from "@/app/sw/PushNotification";
import PwaInstall from "@/app/sw/PwaInstall";
import TutorialModal from "@/components/ui/modals/TutorialModal";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authConext";

export const ModalContext = createContext<{
  showPwaModals: boolean;
  showTutorial: boolean;
  handleShowPwaModals: (value: boolean) => void;
  handleShowTutorial: (value: boolean) => void;
}>(null);

export const ModalProvider = ({ children }) => {
  const [showPwaModals, setShowPwaModals] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const { shipmentId } = useContext(AuthContext);
  const handleShowTutorial = (value: boolean) => {
    setShowTutorial(value);
  };

  const handleShowPwaModals = (value: boolean) => {
    setShowPwaModals(value);
  };

  const showModalsPwa = showPwaModals && !shipmentId;
  const showModalsTutorial = !showPwaModals && !shipmentId;
  return (
    <ModalContext.Provider
      value={{
        showPwaModals,
        showTutorial,
        handleShowPwaModals,
        handleShowTutorial,
      }}
    >
      {showModalsTutorial && <TutorialModal visible={!showPwaModals} />}
      {showModalsPwa && <PwaInstall visible={showPwaModals} />}
      {showModalsPwa && <PushNotification visible={showPwaModals} />}
      {children}
    </ModalContext.Provider>
  );
};
