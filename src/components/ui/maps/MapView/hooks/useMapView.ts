import { useEffect, useState } from "react";

const useMapView = (locationInfo, setLocationInfo) => {
  const [currentLocation, setCurrentLocation] = useState<{
    info: string;
    marker: number[];
  } | null>(null);

  const getCurrentMarkerLocationInfo = async (latlng: L.LatLng) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json&addressdetails=1`
    );
    const data = await response.json();

    return data.address
      ? `${data.address.road} ${data.address.house_number ?? ""}, ${
          data.address.city.split(" ")[2]
        } ${data.address.city.split(" ")[3]}, ${data.address.country}`
      : "Dirección no disponible";
  };

  const handleMapClick = async (latlng: L.LatLng) => {
    const infoLocation = await getCurrentMarkerLocationInfo(latlng);

    setCurrentLocation({
      info: infoLocation,
      marker: [latlng.lat, latlng.lng],
    });
  };

  const calculatePrice = (dist: number, pricePerKm: number) => {
    const distance = Math.round(Math.round(dist) * pricePerKm);
    return distance;
  };

  useEffect(() => {
    if (locationInfo.length >= 2) {
      setLocationInfo([]);
    }
    setLocationInfo((prevLocation) => [...prevLocation, currentLocation]);
  }, [currentLocation]);
  return {
    currentLocation,
    setCurrentLocation,
    calculatePrice,
    handleMapClick,
  };
};

export default useMapView;
