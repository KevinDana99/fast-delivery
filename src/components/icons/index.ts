import { renderToStaticMarkup } from "react-dom/server";
import L from "leaflet";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { ReactNode } from "react";

const getCustomIcon = ({ icon }: { icon: ReactNode }) => {
  const iconMarkup = renderToStaticMarkup(icon);

  const customIcon = L.divIcon({
    className: "",
    html: iconMarkup,
    iconSize: [30, 30],
    iconAnchor: [14, 30],
    popupAnchor: [0, -30],
  });

  return customIcon;
};

export default getCustomIcon;
