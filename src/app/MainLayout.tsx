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
import TutorialModal from "@/components/ui/modals/TutorialModal";
import { ModalProvider } from "@/contexts/modalContext";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { loading } = useLoading();

  if (loading) {
    return <Loading />;
  }

  return (
    <RouteProvider>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <ModalProvider>{children}</ModalProvider>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </RouteProvider>
  );
};

export default MainLayout;
