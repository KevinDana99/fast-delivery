import { SERVER_WS_URI } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useLocation = () => {
  const searchParams = useSearchParams();
  const USER = searchParams.get("user");

  const [location, setLocation] = useState<number[]>(null);
  const handleSendLocation = () => {
    console.log(location);
  };
  const handleWatchLocation = () => {
    try {
      navigator?.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation([lat, lng]);
          console.log("Ubicación actual:", lat, lng);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } catch (err) {
      console.error("Error al intentar obtener la ubicación:", err);
    }
  };

  useEffect(() => {
    if (USER === "000Admin") {
      handleWatchLocation();
    }
  }, []);

  useEffect(() => {
    if (location) {
      handleSendLocation();
    }
  }, [location]);

  return location;
};

export default useLocation;
