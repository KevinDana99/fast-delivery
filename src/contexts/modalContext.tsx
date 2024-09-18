import PushNotification from "@/app/sw/PushNotification";
import PwaInstall from "@/app/sw/PwaInstall";
import TutorialModal from "@/components/ui/modals/TutorialModal";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext<{
  showPwaModals: boolean;
  showTutorial: boolean;
  handleShowPwaModals: (value: boolean) => void;
  handleShowTutorial: (value: boolean) => void;
}>(null);

export const ModalProvider = ({ children }) => {
  const [showPwaModals, setShowPwaModals] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleShowTutorial = (value: boolean) => {
    setShowTutorial(value);
  };

  const handleShowPwaModals = (value: boolean) => {
    setShowPwaModals(value);
  };

  return (
    <ModalContext.Provider
      value={{
        showPwaModals,
        showTutorial,
        handleShowPwaModals,
        handleShowTutorial,
      }}
    >
      {!showPwaModals && <TutorialModal visible={!showPwaModals} />}
      {showPwaModals && <PwaInstall visible={showPwaModals} />}
      {showPwaModals && <PushNotification visible={showPwaModals} />}
      {children}
    </ModalContext.Provider>
  );
};
