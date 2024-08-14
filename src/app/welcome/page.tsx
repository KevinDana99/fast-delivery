"use client";
import React from "react";
import { AppContainer, WrapperMap } from "./styled";
import dynamic from "next/dynamic";
import useWelcome from "./hooks/useWelcome";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const DynamicMapView = dynamic(() => import("@/components/ui/maps/MapView"), {
  ssr: false,
});
const Welcome = () => {
  const {
    infoLocation,
    setInfoLocation,
    setRouteInfo,
    routeInfo,
    originLocation,
    destinationLocation,
  } = useWelcome();

  return (
    <AppContainer>
      <Header infoLocation={infoLocation} setInfoLocation={setInfoLocation} />
      <WrapperMap>
        <DynamicMapView
          setInfoLocation={setInfoLocation}
          locationInfo={infoLocation}
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

export default Welcome;
