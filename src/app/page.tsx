"use client";
import React, { useEffect, useRef, useState } from "react";
import { AppContainer, WrapperMap } from "./styled";
import dynamic from "next/dynamic";
import useHome from "./hooks/useHome";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import useTutorial from "./hooks/useTutorial";

const DynamicMapView = dynamic(() => import("@/components/ui/maps/MapView"), {
  ssr: false,
});
const Home = () => {
  const {
    infoLocation,
    setInfoLocation,
    setRouteInfo,
    routeInfo,
    originLocation,
    destinationLocation,
  } = useHome();

  const tourRef = useRef(false);
  useTutorial("home", tourRef);
  return (
    <AppContainer>
      <Header infoLocation={infoLocation} setInfoLocation={setInfoLocation} />
      <WrapperMap>
        <DynamicMapView
          setInfoLocation={setInfoLocation}
          infoLocation={infoLocation}
          setRouteInfo={setRouteInfo}
          routeInfo={routeInfo}
        />
      </WrapperMap>
      <Footer
        destinationLocation={destinationLocation}
        originLocation={originLocation}
      />
    </AppContainer>
  );
};

export default Home;
