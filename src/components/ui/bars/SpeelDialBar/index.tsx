import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React, { useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import PendingIcon from "@mui/icons-material/Pending";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { RouteContext } from "@/contexts/routeContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const SpeelDialBar = () => {
  const { handleChangeShipmentStatus } = useContext(RouteContext);
  const actions = [
    {
      icon: <CancelIcon />,
      name: "Cancelar pedido",
      onClick: () => handleChangeShipmentStatus("canceled"),
    },
    {
      icon: <MyLocationIcon />,
      name: "En punto de origen",
      onClick: () => handleChangeShipmentStatus("in-origin"),
    },
    {
      icon: <LocationOnIcon />,
      name: "En punto de destino",
      onClick: () => handleChangeShipmentStatus("in-destine"),
    },
    {
      icon: <PendingIcon />,
      name: "Pendiente",
      onClick: () => handleChangeShipmentStatus("pending"),
    },
    {
      icon: <TwoWheelerIcon />,
      name: "En curso",
      onClick: () => handleChangeShipmentStatus("in-course"),
    },
    {
      icon: <WhereToVoteIcon />,
      name: "Completado",
      onClick: () => handleChangeShipmentStatus("completed"),
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 45, right: 16 }}
      icon={<ShoppingBagIcon fontSize="medium" />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeelDialBar;
