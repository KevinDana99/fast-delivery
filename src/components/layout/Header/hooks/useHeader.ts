import React, { useEffect, useState } from "react";
import { HeaderType } from "../types";

const useHeader = ({ infoLocation, setInfoLocation }: HeaderType) => {
  console.log(infoLocation);
  const handleSearchLocation = async (locationName: string) => {
    const API_URL = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      locationName
    )},%20Puerto%20Madryn,%20Argentina&format=json&addressdetails=1`;
    const req = await fetch(API_URL);
    const res = await req.json();
    console.log(res);
    return res;
  };
  const handleChangeOriginLocation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentInfo = e.target.value;
    const setNewInfo = infoLocation[0];
    setNewInfo.info = currentInfo;
    setInfoLocation([setNewInfo, infoLocation[1]]);
    handleSearchLocation(currentInfo);
  };

  const handleChangeDestinationLocation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentInfo = e.target.value;
    const setNewInfo = infoLocation[1];
    setNewInfo.info = currentInfo;
    setInfoLocation([infoLocation[0], setNewInfo]);
  };

  return {
    handleChangeOriginLocation,
    handleChangeDestinationLocation,
  };
};

export default useHeader;
