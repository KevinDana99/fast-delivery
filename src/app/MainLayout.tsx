"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/globals/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "@/globals/theme/Mui";
import { RouteProvider } from "@/contexts/routeContext";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/ui/Loading";
import PwaInstall from "./sw/PwaInstall";
import PushNotification from "./sw/PushNotification";
const MainLayout = ({ children }: { children: ReactNode }) => {
  const { loading } = useLoading();
  const [showModal, setShowModal] = useState(false);

  const handleFinishTutorial = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const tourCompleted = localStorage?.getItem("tour-home") ?? "false";
    if (tourCompleted === "true") {
      setShowModal(true);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <RouteProvider handleFinishTutorial={handleFinishTutorial}>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          {children}
          <PwaInstall visible={showModal} />
          <PushNotification visible={showModal} />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </RouteProvider>
  );
};

export default MainLayout;
