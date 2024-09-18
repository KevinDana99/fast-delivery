import { useSearchParams } from "next/navigation";
import React, { createContext } from "react";

export const AuthContext = createContext<{ user: string; shipmentId: string }>(
  null
);

export const AuthProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const user = localStorage?.getItem("user") ?? searchParams.get("user");
  const shipmentId = searchParams.get("shipment");
  return (
    <AuthContext.Provider value={{ user, shipmentId }}>
      {children}
    </AuthContext.Provider>
  );
};
