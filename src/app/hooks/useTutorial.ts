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
  tourRef: React.MutableRefObject<boolean>
) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [steps, setSteps] = useState([]);
  const currentTourName = `tour-${tutorial}`;
  const tourCompleted = localStorage.getItem(currentTourName);
  useEffect(() => {
    if (tourRef.current) return;
    let steps;
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: true,
        classes: "shepherd-theme-dark",
      },
      useModalOverlay: true,
      onShow: () => setShowTutorial(true),
      onHide: () => setShowTutorial(false),
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
    });
    tourRef.current = true;
  }, []);

  return {
    showTutorial,
    steps,
  };
};

export default useTutorial;
