"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/globals/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "@/globals/theme/Mui";
import { RouteProvider } from "@/contexts/routeContext";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/ui/Loading";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { loading } = useLoading();
  const [showPwaModals, setShowPwaModals] = useState(false);

  const handleFinishTutorial = () => {
    setShowPwaModals(true);
  };

  useEffect(() => {
    const tourCompleted = localStorage?.getItem("tour-home") ?? "false";
    if (tourCompleted === "true") {
      setShowPwaModals(true);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <RouteProvider
      handleFinishTutorial={handleFinishTutorial}
      showPwaModals={showPwaModals}
    >
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </RouteProvider>
  );
};

export default MainLayout;
