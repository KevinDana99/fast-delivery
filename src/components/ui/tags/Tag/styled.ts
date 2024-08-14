import theme from "@/globals/theme";
import styled from "styled-components";

export const StyledTag = styled.div`
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

export const Icon = styled.span`
  margin-right: 10px;
  margin-top: 3px;
  color: ${theme.main.color};
`;
