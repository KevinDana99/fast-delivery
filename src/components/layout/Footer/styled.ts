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
  z-index: 100;
  bottom: 0px;
  background: ${theme.main.color};
  box-sizing: border-box;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const FooterLink = styled.a<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4px;
  flex: 1;
  color: ${(props) => (props.active ? "#181111" : "#896161")};
  z-index: 100;
`;

export const ButtonFooterLink = styled.a`
  background-color: white;
  width: 100px;
  height: 30px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: ${theme.main.color};
`;

export const FooterIcon = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
