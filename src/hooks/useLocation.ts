import { SERVER_WS_URI } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Ably from "ably";
const useLocation = () => {
  const searchParams = useSearchParams();
  const USER = searchParams.get("user");
  const [location, setLocation] = useState<number[]>(null);
  const [channelState, setChannelState] = useState(null);
  const handleSendLocation = async () => {
    const currentLocation = [location[0], location[1]];
    channelState &&
      (await channelState?.publish("location", {
        type: "location",
        currentLocation,
      }));
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
    const initializateClient = async () => {
      const ably = new Ably.Realtime(
        "eyJ0eXAiOiJKV1QiLCJ2ZXJzaW9uIjoxLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNmVjMGYzZC0xM2U5LTQ1YjQtOTViOS1kMDI5YmJlMmFiMmMiLCJpc3MiOiJhYmx5LmNvbSIsImlhdCI6MTcyNjI3MTU1MCwic3ViIjo1OTk2N30.yR-U6mZcvUOVKzv4NmAGl4qfYK1YvNAMy9x0zJKLjE4"
      );
      const channel = ably.channels.get("geolocation");
      setChannelState(channel);

      await channel.subscribe("location", ({ data }) => {
        setLocation(data.currentLocation);
      });
    };

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
