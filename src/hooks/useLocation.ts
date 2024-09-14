import { SERVER_WS_URI } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Ably from "ably";
const useLocation = () => {
  const searchParams = useSearchParams();
  const USER = searchParams.get("user");
  const [location, setLocation] = useState<number[]>(null);
  const [channelState, setChannelState] = useState(null);
  const handleSendLocation = () => {
    console.log("send");
    const currentLocation = [location[0], location[1]];
    channelState.publish("location", {
      type: "location",
      currentLocation,
    });
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
    const ably = new Ably.Realtime(
      "TaSlrQ.SLHZEw:GLIHt9L_yd9skDWBbKyb29ttDMJFgNt3R6Og6gFvyBo"
    );
    const channel = ably.channels.get("geolocation");
    setChannelState(channel);
    channel.subscribe("location", ({ data }) => {
      setLocation(data.currentLocation);
    });

    if (USER === "000Admin") {
      handleWatchLocation();
    }
  }, []);

  useEffect(() => {
    console.log("se ejecuto");
    // handleSendLocation();
  }, [location]);

  return location;
};

export default useLocation;
