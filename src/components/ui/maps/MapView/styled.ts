import theme from "@/globals/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  .leaflet-routing-container {
    display: none;
  }
`;

export const Metrics = styled.div<{ position: "right" | "left" }>`
  position: fixed;
  z-index: 1000;
  bottom: 55px;
  ${({ position }) => `${position}: 16px`};

  @media (min-width: 700px) {
    bottom: 5px;
  }
`;
