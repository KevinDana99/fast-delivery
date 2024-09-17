import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Ably from "ably";
import { validateHeaderName } from "http";
const INITIAL_LOCATION = [-42.7846027, -65.0511623];

const useLocation = () => {
  const searchParams = useSearchParams();
  const USER = searchParams.get("user");
  const CLIENT_ID = searchParams.get("shipment");
  const [location, setLocation] = useState<number[]>(INITIAL_LOCATION);
  const [channelState, setChannelState] = useState<Ably.RealtimeChannel>(null);
  const [locationRealTime, setLocationRealTime] =
    useState<number[]>(INITIAL_LOCATION);
  const handleSendLocation = () => {
    channelState &&
      channelState.publish("location", {
        type: "location",
        location,
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
      console.error("Error al intentar obtener la ubicación:", err);
    }
  };

  useEffect(() => {
    if (CLIENT_ID || USER === "000Admin") {
      const ably = new Ably.Realtime({
        key: "TaSlrQ.SLHZEw:GLIHt9L_yd9skDWBbKyb29ttDMJFgNt3R6Og6gFvyBo",
      });
      const channel = ably.channels.get("geolocation");
      setChannelState(channel);

      channel.subscribe("location", ({ data }) => {
        setLocationRealTime([data.location]);
      });
    }

    if (USER === "000Admin") {
      handleWatchLocation();
    }
  }, []);

  useEffect(() => {
    handleSendLocation();
  }, [location]);

  return locationRealTime;
};

export default useLocation;
