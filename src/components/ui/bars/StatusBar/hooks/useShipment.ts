import { AuthContext } from "@/contexts/authConext";
import { useContext, useEffect, useState } from "react";
import Ably from "ably";

import { RouteContext } from "@/contexts/routeContext";

const useShipment = () => {
  const [channelState, setChannelState] = useState<Ably.RealtimeChannel>(null);
  const { shipment, setShipment } = useContext(RouteContext);
  const { shipmentId, user } = useContext(AuthContext);
  const [shipmentRealTime, setShipmentRealTime] = useState(shipment);

  const handleSendShipment = () => {
    channelState &&
      channelState.publish("shipment", {
        type: "shipment",
        shipment,
      });
  };

  useEffect(() => {
    if (user === "000Admin") {
      handleSendShipment();
    }
  }, [shipment]);

  useEffect(() => {
    if (shipmentId || user === "000Admin") {
      const ably = new Ably.Realtime({
        key: "TaSlrQ.SLHZEw:GLIHt9L_yd9skDWBbKyb29ttDMJFgNt3R6Og6gFvyBo",
      });
      const channel = ably.channels.get("shipment");
      setChannelState(channel);

      channel.subscribe("shipment", ({ data }) => {
        shipmentId === data.shipment.id &&
          setShipmentRealTime({ ...shipment, status: data.shipment.status });
      });
    }
  }, []);

  return {
    shipment: shipmentRealTime,
    setShipment,
  };
};

export default useShipment;
