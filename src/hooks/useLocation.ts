import { SERVER_WS_URI } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useLocation = () => {
  const searchParams = useSearchParams();
  const USER = searchParams.get("user");
  const [location, setLocation] = useState<number[]>(null);
  const [socketState, setSocketState] = useState<WebSocket>(null);
  const handleWatchLocation = () => {
    try {
      navigator?.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation([lat, lng]);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        },
        {
          enableHighAccuracy: true, // Intentar usar GPS si está disponible
          timeout: 5000, // Tiempo máximo de espera para obtener la ubicación
          maximumAge: 0, // No usar ubicación en caché
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendLocation = () => {
    const currentLocation = {
      type: "location",
      lat: location[0],
      lng: location[1],
    };
    socketState.send(JSON.stringify(currentLocation));
  };

  useEffect(() => {
    const socket = new WebSocket(SERVER_WS_URI);
    setSocketState(socket);
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "location") {
        console.log("Ubicación recibida:", message.lat, message.lng);
      }
    };
    handleWatchLocation();
  }, []);

  useEffect(() => {
    if (USER === "000Admin") {
      if (location && socketState.readyState === WebSocket.OPEN) {
        handleSendLocation();
      }
      console.log(location);
    }
  }, [location]);

  return location;
};

export default useLocation;
