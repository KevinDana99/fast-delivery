"use client";
import React, { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "@/globals/theme";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainLayout;
