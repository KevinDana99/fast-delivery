import React, { useEffect, useState } from "react";
import { HeaderType } from "../types";
import { SearchOptions } from "./types";

const useHeader = ({ infoLocation, setInfoLocation }: HeaderType) => {
  const [query, setQuery] = useState({
    origin: infoLocation[0]?.info ?? "1",
    destination: infoLocation[1]?.info ?? "2",
  });

  console.log(infoLocation, "info-header");
  console.log(query, "info-query");
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

  useEffect(() => {
    console.log("paso", infoLocation[0]?.info);
    setQuery({
      ...query,
      origin: infoLocation[0]?.info,
      destination: infoLocation[1]?.info,
    });
  }, [infoLocation]);

  return {
    handleChangeOriginLocation,
    handleChangeDestinationLocation,
    query,
    searchOptions,
  };
};

export default useHeader;
