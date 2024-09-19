import theme from "@/globals/theme";
import styled from "styled-components";

export const BoxContainer = styled.div;
export const Container = styled.div`
  width: 75px;
  height: 75px;
  background-color: ${theme.main.color};
  border-radius: 100%;
  position: fixed;
  z-index: 1000;
  bottom: 55px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
