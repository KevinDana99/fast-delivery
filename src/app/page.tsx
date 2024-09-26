"use client";
import React, { useEffect, useRef, useState } from "react";
import { AppContainer, WrapperMap } from "./styled";
import dynamic from "next/dynamic";
import useHome from "./hooks/useHome";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StatusBar from "@/components/ui/bars/StatusBar";
import { StatusShipmentType } from "@/components/ui/bars/StatusBar/types";
import { Button } from "@mui/material";

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
    user,
  } = useHome();

  return (
    <AppContainer>
      {shipmentId && <StatusBar />}
      <Header statusBar={!!shipmentId} />
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
