"use client";
import React, { useEffect, useRef, useState } from "react";
import { AppContainer, WrapperMap } from "./styled";
import dynamic from "next/dynamic";
import useHome from "./hooks/useHome";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import useTutorial from "./hooks/useTutorial";
import PwaInstall from "./sw/PwaInstall";
import PushNotification from "./sw/PushNotification";

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
    shipmentId,
    showPwaModals,
  } = useHome();

  return (
    <AppContainer>
      <PwaInstall visible={showPwaModals && !shipmentId} />
      <PushNotification visible={showPwaModals && !shipmentId} />
      <Header />
      <WrapperMap>
        <DynamicMapView
          setInfoLocation={setInfoLocation}
          infoLocation={infoLocation}
          setRouteInfo={setRouteInfo}
          routeInfo={routeInfo}
        />
      </WrapperMap>

      {!shipmentId && (
        <Footer
          destinationLocation={destinationLocation}
          originLocation={originLocation}
        />
      )}
    </AppContainer>
  );
};

export default Home;
