"use client";
import React, { useEffect, useState } from "react";
import { AppContainer, WrapperMap } from "./styled";
import dynamic from "next/dynamic";
import useWelcome from "./hooks/useWelcome";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Loading from "@/components/ui/Loading";
import useLoading from "@/hooks/useLoading";

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
  } = useWelcome();
  const { loading } = useLoading();
  return loading ? (
    <Loading />
  ) : (
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

export default Home;
