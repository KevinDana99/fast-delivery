"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import { handleHomeTutorial } from "../tutorial";
import { handleDetailsTutorial } from "../details/tutorial";

declare module "shepherd.js" {
  interface TourOptions {
    onShow?: () => void;
    onHide?: () => void;
  }
}
const useTutorial = (
  tutorial: "home" | "details",
  tourRef: React.MutableRefObject<boolean>,
  showTutorialProp?: boolean,
  handleShowTutorial?: (value: boolean) => void,
  handleShowPwaModals?: (value: boolean) => void
) => {
  const [steps, setSteps] = useState([]);
  const currentTourName = `tour-${tutorial}`;
  const tourCompleted = localStorage.getItem(currentTourName);

  const handleFinishTutorial = () => {
    localStorage.setItem(currentTourName, "true");
  };

  const handleStartTutorial = () => {
    let steps;
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: true,
        classes: "shepherd-theme-dark",
      },
      useModalOverlay: true,
      onShow: () => handleShowTutorial(true),
      onHide: () => handleShowTutorial(false),
    });
    switch (tutorial) {
      case "home":
        steps = handleHomeTutorial(tour);
        break;
      case "details":
        steps = handleDetailsTutorial(tour);
        break;
    }

    setSteps(steps);
    steps.forEach((step) => {
      tour.addStep(step);
    });
    if (tourCompleted === "true") {
    } else {
      tour.start();
    }
    tour.on("complete", () => {
      localStorage.setItem(`${currentTourName}`, "true");
      handleFinishTutorial && handleFinishTutorial();
    });
  };

  useEffect(() => {
    if (tourRef.current) return;
    showTutorialProp && handleStartTutorial();
    showTutorialProp && (tourRef.current = true);
  }, [showTutorialProp]);

  useEffect(() => {
    if (tourCompleted === "true") {
      handleShowPwaModals(true);
    }
  }, []);

  return {
    steps,
    handleFinishTutorial,
  };
};

export default useTutorial;
