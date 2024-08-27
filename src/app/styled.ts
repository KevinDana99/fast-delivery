import { styled } from "styled-components";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import theme from "@/globals/theme";
import Link from "next/link";
export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: white;
  font-family: "Be Vietnam Pro", "Noto Sans", sans-serif;
  min-height: 100vh;
  position: relative;
`;

export const WrapperMap = styled.div`
  z-index: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(158px, 1fr));
  gap: 12px;
  padding: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 12px;
`;

export const CardText = styled.div`
  color: #181111;
  font-size: 1rem;
  font-weight: medium;
`;

export const CardSubText = styled.div`
  color: #896161;
  font-size: 0.875rem;
`;
