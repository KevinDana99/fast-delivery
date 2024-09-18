import theme from "@/globals/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #f4f0f0;
  padding: 10px;
  top: 0px;
  background: #f4f0f0;
  box-sizing: border-box;
  left: 50%;
  color: black;
  z-index: 101;
  transform: translateX(-50%);
  align-self: center;
`;
