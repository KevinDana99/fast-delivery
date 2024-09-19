import React from "react";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import theme from "@/globals/theme";
import { Container } from "./styled";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import { statusInfo, StatusShipmentType } from "./types";
import useShipment from "./hooks/useShipment";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StatusBar = () => {
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

      case "canceled":
        return (
          <CancelOutlinedIcon
            style={{ color: theme.colors.primary, fontSize: "30" }}
          />
        );

      case "in-origin":
        return (
          <MyLocationIcon
            style={{ color: theme.colors.primary, fontSize: "30" }}
          />
        );
      case "in-destine":
        return (
          <LocationOnIcon
            style={{ color: theme.colors.primary, fontSize: "30" }}
          />
        );
    }
  };

  const { shipment } = useShipment();
  const statusShipment: StatusShipmentType["status"] = shipment.status;

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
