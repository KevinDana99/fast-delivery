import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Ably from "ably";
import { AuthContext } from "@/contexts/authConext";

const INITIAL_LOCATION = [-42.7522194, -65.0497759];

const useLocation = () => {
  const { user, shipmentId } = useContext(AuthContext);
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
    if (shipmentId || user === "000Admin") {
      const ably = new Ably.Realtime({
        key: "TaSlrQ.SLHZEw:GLIHt9L_yd9skDWBbKyb29ttDMJFgNt3R6Og6gFvyBo",
      });
      const channel = ably.channels.get("geolocation");
      setChannelState(channel);

      channel.subscribe("location", ({ data }) => {
        setLocationRealTime([data.location]);
      });
    }

    if (user === "000Admin") {
      const ADMIN = user;
      localStorage.setItem(`user`, `${ADMIN}`);
      handleWatchLocation();
    }
  }, []);

  useEffect(() => {
    handleSendLocation();
  }, [location]);

  return locationRealTime;
};

export default useLocation;
