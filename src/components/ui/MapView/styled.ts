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

export const Metrics = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 55px;
  right: 5px;

  @media (min-width: 700px) {
    bottom: 5px;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  margin-top: 3px;
  color: ${theme.main.color};
`;

export const Tag = styled.div`
  border-radius: 10px;
  margin-top: 5px;
  width: 150px;
  height: 50px;
  background-color: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.407);
  padding: 10px;
  box-sizing: border-box;
  color: white;
  background-color: white;

  color: ${theme.main.color};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
