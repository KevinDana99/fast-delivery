import React from "react";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import theme from "@/globals/theme";
import { Container } from "./styled";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const StatusBar = () => {
  const statusInfo = {
    pending: "Su pedido esta pendiente (Esperando confirmacion)",
    completed: "Su pedido ha sido completado con exito",
    canceled: "Su pedido ha sido cancelado",
    "in-course": "Su pedido esta en camino",
  };
  type StatusShipmentType = {
    status: keyof typeof statusInfo;
  };

  const SelectStatusShipment = ({ status }: StatusShipmentType) => {
    switch (status) {
      case "pending":
        return (
          <PendingOutlinedIcon
            style={{ color: theme.colors.primary, fontSize: "30" }}
          />
        );

      case "completed":
        return (
          <WhereToVoteIcon
            style={{ color: theme.colors.primary, fontSize: "30" }}
          />
        );

      case "in-course":
        return (
          <TwoWheelerOutlinedIcon
            style={{ color: theme.colors.primary, fontSize: "30" }}
          />
        );
    }
  };

  const statusShipment: StatusShipmentType["status"] = "in-course";

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ margin: 8 }}>{statusInfo[statusShipment]}</div>
        <SelectStatusShipment status={statusShipment} />
      </div>
    </Container>
  );
};

export default StatusBar;
