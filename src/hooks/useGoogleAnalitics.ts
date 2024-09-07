"use client";
import { useEffect } from "react";

const useGoogleAnalytics = () => {
  useEffect(() => {
    if (window) {
      //@ts-ignore
      window.dataLayer = window.dataLayer || [];
      //@ts-ignore
      function gtag() {
        //@ts-ignore
        dataLayer.push(arguments);
      }
      //@ts-ignore
      gtag("js", new Date());
      //@ts-ignore
      gtag("config", "G-0G4ZD773X2");
    }
  }, []);

  return null;
};

export default useGoogleAnalytics;
