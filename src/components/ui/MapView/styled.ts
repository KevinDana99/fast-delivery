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
  bottom: 0px;
  right: 0px;
`;

export const Tag = styled.div`
  border-radius: 10px;
  margin-top: 5px;
  width: 120px;
  height: 50px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.407);
  color: black;
  padding: 10px;
  box-sizing: border-box;
`;
