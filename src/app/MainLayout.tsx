"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/globals/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "@/globals/theme/Mui";
import { RouteProvider } from "@/contexts/routeContext";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/ui/Loading";
import { ModalProvider } from "@/contexts/modalContext";
import { AuthProvider } from "@/contexts/authConext";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { loading } = useLoading();

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <RouteProvider>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <ModalProvider>{children}</ModalProvider>
          </MuiThemeProvider>
        </StyledThemeProvider>
      </RouteProvider>
    </AuthProvider>
  );
};

export default MainLayout;
