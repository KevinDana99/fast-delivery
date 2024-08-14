import React from "react";
import { HeaderType } from "../types";

const useHeader = ({ infoLocation, setInfoLocation }: HeaderType) => {
  const handleChangeOriginLocation = (e) => {
    const currentInfo = e.target.value;
    const setNewInfo = infoLocation[0];
    setNewInfo.info = currentInfo;
    setInfoLocation([setNewInfo, infoLocation[1]]);
  };

  const handleChangeDestinationLocation = (e) => {
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
