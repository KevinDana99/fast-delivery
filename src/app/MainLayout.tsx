"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/globals/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "@/globals/theme/Mui";
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default MainLayout;
