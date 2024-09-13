import React, {
  ReactEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { SearchOption, SearchOptions } from "./types";
import { LocationType } from "@/app/types";
import { RouteContext } from "@/contexts/routeContext";

const LOCATION_CITY = "Puerto Madryn";
const useHeader = () => {
  const { infoLocation, setInfoLocation, myLocation } =
    useContext(RouteContext);
  const infoLocationPrimary: LocationType = infoLocation[0];
  const infoLocationSecondary: LocationType = infoLocation[1];

  const enableHeaderButton = infoLocation[1]?.info && infoLocation[0]?.info;

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
    const LOCATION_COUNTRY = "Argentina";
    const API_URL = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      locationName
    )},${encodeURIComponent(LOCATION_CITY)},${encodeURIComponent(
      LOCATION_COUNTRY
    )}&format=json&addressdetails=1&&extratags=1`;

    try {
      const req = await fetch(API_URL);
      const res = await req.json();
      return res;
    } catch (err) {
      throw err;
    }
  };

  const getDisplayNameLocation = (option: SearchOption) => {
    const display_name =
      `${
        option?.address?.amenity ||
        option?.address?.shop ||
        option?.address?.building ||
        option?.address?.cemetery ||
        option?.address?.park ||
        option.address.water ||
        option.address.road ||
        option?.address?.industrial ||
        option?.address?.neighbourhood ||
        option.address?.suburb ||
        option.address?.city_district ||
        option.address?.city
      } ${option?.address?.house_number ?? ""}, ${LOCATION_CITY}` ??
      `${
        option.address.road ??
        option?.address?.neighbourhood ??
        option.address?.suburb
      } ${option?.address?.house_number ?? ""}, ${LOCATION_CITY}`;

    return display_name;
  };

  const handleChangeOriginLocation = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentInfo = e.target.value;
    setQuery({ ...query, origin: currentInfo });
  };

  const handleChangeDestinationLocation = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentInfo = e.target.value;
    setQuery({ ...query, destination: currentInfo });
  };

  const handleSelectedOriginLocation = async (option: SearchOption) => {
    const display_name = getDisplayNameLocation(option);
    setInfoLocation([
      {
        ...infoLocationPrimary,
        info: `${display_name}`,
        marker: [parseFloat(option.lat), parseFloat(option.lon)],
      },
      infoLocationSecondary,
    ]);

    setSearchOptions({
      origin: null,
      destination: null,
    });
  };

  const handleSelectedDestinationLocation = async (option: SearchOption) => {
    const display_name = getDisplayNameLocation(option);

    setInfoLocation([
      infoLocationPrimary,
      {
        ...infoLocationSecondary,
        info: `${display_name}`,
        marker: [parseFloat(option.lat), parseFloat(option.lon)],
      },
    ]);

    setSearchOptions({
      origin: null,
      destination: null,
    });
  };

  // maneja el evento de limpieza del input
  const handleCleanInput = (type: "origin" | "destination") => {
    switch (type) {
      case "origin":
        setQuery({
          ...query,
          origin: "",
        });
        setInfoLocation([
          { ...infoLocationPrimary, info: null, marker: [] },
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
          { ...infoLocationSecondary, info: null, marker: [] },
        ]);
    }
  };

  const handleOnKeyDownInputOrigin = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key;
    console.log(key);
    switch (key) {
      case "Backspace":
        setInfoLocation([
          { ...infoLocationPrimary, info: null, marker: [] },
          infoLocationSecondary,
        ]);
        break;

      case "Enter":
        handleSelectedOriginLocation(searchOptions.origin[0]);
        break;
    }
  };

  const handleOnKeyDownInputDestination = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key;
    console.log(key);
    switch (key) {
      case "Backspace":
        setInfoLocation([
          infoLocationPrimary,
          { ...infoLocationSecondary, info: null, marker: [] },
        ]);
        break;

      case "Enter":
        handleSelectedDestinationLocation(searchOptions.destination[0]);
        break;
    }
  };

  useEffect(() => {
    setQuery({
      ...query,
      origin: infoLocation[0]?.info,
      destination: infoLocation[1]?.info,
    });
  }, [infoLocation]);

  const filterSearchOptions = (data: SearchOption[]) => {
    const filterData = data.filter((element, index) => index < 3 && element);
    return filterData;
  };

  useEffect(() => {
    const request = async () => {
      const result: SearchOption[] = await handleSearchLocation(query.origin);
      const filterResult = filterSearchOptions(result);
      setSearchOptions({ ...searchOptions, origin: filterResult });
    };

    const timer = setTimeout(() => request(), 300);

    return () => clearTimeout(timer);
  }, [query.origin]);

  useEffect(() => {
    const request = async () => {
      const result = await handleSearchLocation(query.destination);
      setSearchOptions({ ...searchOptions, destination: result });
    };

    const timer = setTimeout(() => request(), 300);
    return () => clearTimeout(timer);
  }, [query.destination]);

  return {
    handleChangeOriginLocation,
    handleChangeDestinationLocation,
    handleCleanInput,
    handleSelectedOriginLocation,
    handleSelectedDestinationLocation,
    handleOnKeyDownInputDestination,
    handleOnKeyDownInputOrigin,
    getDisplayNameLocation,
    infoLocation,
    query,
    searchOptions,
    enableHeaderButton,
    myLocation,
  };
};

export default useHeader;
