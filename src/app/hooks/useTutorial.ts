"use client";
import React, { useEffect, useRef, useState } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import { handleHomeTutorial } from "../tutorial";

declare module "shepherd.js" {
  interface TourOptions {
    onShow?: () => void;
    onHide?: () => void;
  }
}
const useTutorial = (tutorial: "home" | "details") => {
  const tourInitialized = useRef(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [steps, setSteps] = useState([]);

  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      classes: "shepherd-theme-dark",
    },
    useModalOverlay: true,
    onShow: () => setShowTutorial(true),
    onHide: () => setShowTutorial(false),
  });

  useEffect(() => {
    if (tourInitialized.current) return;
    let steps;

    switch (tutorial) {
      case "home":
        steps = handleHomeTutorial(tour);
        break;
      case "details":
        steps = handleHomeTutorial(tour);
        break;
    }

    setSteps(steps);
    steps.forEach((step) => {
      tour.addStep(step);
    });

    tour.start();
    tourInitialized.current = true;
  }, []);

  return {
    showTutorial,
    steps,
  };
};

export default useTutorial;
