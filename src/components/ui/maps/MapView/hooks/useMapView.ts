import { LocationType } from "@/app/types";
import { RouteContext } from "@/contexts/routeContext";

import { useContext, useEffect, useState } from "react";
type LatLngType = {
  lat: number;
  lng: number;
};
const useMapView = (
  locationInfo: LocationType[],
  setLocationInfo: React.Dispatch<React.SetStateAction<LocationType[]>>
) => {
  const [currentLocation, setCurrentLocation] = useState<L.LatLng>(null);
  const { shipmentId } = useContext(RouteContext);
  const getCurrentMarkerLocationInfo = async (latlng: L.LatLng) => {
    const API_URL = `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json&addressdetails=1`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.address
      ? `${data.address.road} ${data.address.house_number ?? ""}, ${
          data.address.city.split(" ")[2]
        } ${data.address.city.split(" ")[3]}, ${data.address.country}`
      : "Dirección no disponible";
  };

  const handleInfoLocation = async (latlng: L.LatLng | LatLngType) => {
    const infoLocation = await getCurrentMarkerLocationInfo(latlng as L.LatLng);
    setLocationInfo((prev) => {
      return prev.map((loc) =>
        loc.marker[0] === latlng.lat && loc.marker[1] === latlng.lng
          ? { ...loc, info: infoLocation }
          : loc
      );
    });
  };

  const handleSetMarkerPoints = (latlng: L.LatLng) => {
    setLocationInfo((prev) => {
      return prev.length >= 2
        ? [
            {
              info: "",
              marker: [latlng.lat, latlng.lng],
            },
          ]
        : [
            ...prev,
            {
              info: "",
              marker: [latlng.lat, latlng.lng],
            },
          ];
    });
  };

  const handleMapClick = async (latlng: L.LatLng) => {
    if (!shipmentId) {
      handleInfoLocation(latlng);
      handleSetMarkerPoints(latlng);
    }
  };

  useEffect(() => {
    if (locationInfo[0]?.marker) {
      handleInfoLocation({
        lat: locationInfo[0].marker[0],
        lng: locationInfo[0].marker[1],
      });
    }
    if (locationInfo[1]?.marker) {
      handleInfoLocation({
        lat: locationInfo[1].marker[0],
        lng: locationInfo[1].marker[1],
      });
    }
  }, []);

  return {
    currentLocation,
    setCurrentLocation,
    handleMapClick,
    getCurrentMarkerLocationInfo,
  };
};

export default useMapView;
