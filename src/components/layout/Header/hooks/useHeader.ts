import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { HeaderType } from "../types";
import { SearchOption, SearchOptions } from "./types";
import { LocationType } from "@/app/welcome/types";

const useHeader = ({ infoLocation, setInfoLocation }: HeaderType) => {
  const infoLocationPrimary: LocationType = infoLocation[0];
  const infoLocationSecondary: LocationType = infoLocation[1];

  const [query, setQuery] = useState({
    origin: infoLocation[0]?.info ?? "",
    destination: infoLocation[1]?.info ?? "",
  });

  const [searchOptions, setSearchOptions] = useState<{
    origin: SearchOptions | null;
    destination: SearchOptions | null;
  }>({
    origin: null,
    destination: null,
  });

  const handleSearchLocation = async (locationName: string) => {
    const API_URL = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      locationName
    )},${encodeURIComponent("Puerto Madryn")},${encodeURIComponent(
      "Argentina"
    )}&format=json&addressdetails=1&&extratags=1`;

    try {
      const req = await fetch(API_URL);
      const res = await req.json();
      return res;
    } catch (err) {
      throw err;
    }
  };
  const handleChangeOriginLocation = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentInfo = e.target.value;
    setQuery({ ...query, origin: currentInfo });
    const result = await handleSearchLocation(currentInfo);
    setSearchOptions({ ...searchOptions, origin: result });
  };

  const handleChangeDestinationLocation = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentInfo = e.target.value;
    setQuery({ ...query, destination: currentInfo });
    const result = await handleSearchLocation(currentInfo);

    setSearchOptions({ ...searchOptions, destination: result });
  };

  const handleSelectedLocation = async (
    option: SearchOption,
    type: "origin" | "destination"
  ) => {
    switch (type) {
      case "origin":
        setInfoLocation([
          {
            ...infoLocationPrimary,
            info: `${option.address.road} ${option.address?.house_number}`,
            marker: [parseFloat(option.lat), parseFloat(option.lon)],
          },
          infoLocationSecondary,
        ]);
        break;
      case "destination":
        setInfoLocation([
          infoLocationPrimary,
          {
            ...infoLocationSecondary,
            info: `${option.address.road} ${option.address?.house_number}`,
            marker: [parseFloat(option.lat), parseFloat(option.lon)],
          },
        ]);
    }

    setSearchOptions({
      origin: null,
      destination: null,
    });
  };

  const handleCleanInput = (type: "origin" | "destination") => {
    switch (type) {
      case "origin":
        setQuery({
          ...query,
          origin: "",
        });
        setInfoLocation([
          { ...infoLocationPrimary, info: "", marker: [] },
          infoLocationSecondary,
        ]);
        break;
      case "destination":
        setQuery({
          ...query,
          destination: "",
        });
        setInfoLocation([
          infoLocationPrimary,
          { ...infoLocationSecondary, info: "", marker: [] },
        ]);
    }
  };

  useEffect(() => {
    setQuery({
      ...query,
      origin: infoLocation[0]?.info,
      destination: infoLocation[1]?.info,
    });
  }, [infoLocation]);

  return {
    handleChangeOriginLocation,
    handleChangeDestinationLocation,
    handleCleanInput,
    handleSelectedLocation,
    query,
    searchOptions,
  };
};

export default useHeader;
