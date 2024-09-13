import { SERVER_WS_URI } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Ably from "ably";
const useLocation = () => {
  const searchParams = useSearchParams();
  const USER = searchParams.get("user");
  const [location, setLocation] = useState<number[]>(null);
  const [channelState, setChannelState] = useState<Ably.RealtimeChannel>(null);
  const handleSendLocation = () => {
    channelState.publish("first", {
      type: "location",
      lat: location[0],
      lng: location[1],
    });
  };

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
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const ably = new Ably.Realtime(
      "TaSlrQ.SLHZEw:GLIHt9L_yd9skDWBbKyb29ttDMJFgNt3R6Og6gFvyBo"
    );
    const channel = ably.channels.get("get-started");
    channel.subscribe("first", (message) => {
      console.log(`${JSON.stringify(message.data)}`);
    });
    setChannelState(channel);
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
