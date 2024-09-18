import PushNotification from "@/app/sw/PushNotification";
import PwaInstall from "@/app/sw/PwaInstall";
import TutorialModal from "@/components/ui/modals/TutorialModal";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext<{
  showPwaModals: boolean;
  showTutorial: boolean;
  handleFinishTutorial: () => void;
  handleShowPwaModals: () => void;
  handleShowTutorial: (value: boolean) => void;
}>(null);

export const ModalProvider = ({ children }) => {
  const [showPwaModals, setShowPwaModals] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleFinishTutorial = () => {
    setShowPwaModals(true);
    localStorage.setItem("tour-home", "true");
  };

  const handleShowTutorial = (value: boolean) => {
    setShowTutorial(value);
  };

  const handleShowPwaModals = () => {};

  useEffect(() => {
    const tourCompleted = localStorage?.getItem("tour-home") ?? "false";
    if (tourCompleted === "true") {
      setShowPwaModals(true);
    }
  }, []);

  return (
    <ModalContext.Provider
      value={{
        showPwaModals,
        showTutorial,
        handleFinishTutorial,
        handleShowPwaModals,
        handleShowTutorial,
      }}
    >
      <TutorialModal visible={!showPwaModals} />

      {children}
    </ModalContext.Provider>
  );
};
/*        <PwaInstall visible={showPwaModals} />
      <PushNotification visible={showPwaModals} />  */
