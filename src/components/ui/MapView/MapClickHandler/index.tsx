"use client";
import { LeafletMouseEvent } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapClickHandler = ({
  onMapClick,
}: {
  onMapClick: (latlng: L.LatLng) => void;
}) => {
  const map = useMap();
  useEffect(() => {
    const handleMapClick = (event: LeafletMouseEvent) => {
      onMapClick(event.latlng);
    };

    map.on("click", handleMapClick);

    return () => {
      map.off("click", handleMapClick);
    };
  }, [map]);

  return null;
};

export default MapClickHandler;
