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
      navigator?.geolocation.getCurrentPosition(
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
      // Llama a getLocation cada 10 segundos (10000 ms)
      const intervalId = setInterval(handleWatchLocation, 2000);

      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
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
