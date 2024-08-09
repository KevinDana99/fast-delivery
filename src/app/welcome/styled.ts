import { styled } from "styled-components";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  padding-bottom: 8px;
  background: #e72925;
  flex-direction: row;

  position: fixed;
  z-index: 100;

  @media (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const WrapperMap = styled.div`
  z-index: 1;
`;

export const Icon = styled.div`
  color: #181111;
  width: 40px;
  height: 40px;
`;

export const SearchBar = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  background: #e72925;

  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
  }
`;

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  min-width: 40px;
  height: 48px;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: stretch;
  border-radius: 16px;
  height: 100%;
  background-color: #f4f0f0;
`;

export const SearchInputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  color: #896161;
`;

export const SearchChangeIcon = styled(SearchInputIcon)`
  svg {
    transform: rotate(90deg);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: #f4f0f0;
  outline: none;
  padding: 8px 16px;
  color: #181111;
  font-size: 1rem;
  &::placeholder {
    color: #896161;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: #181111;
  padding-right: 16px;
  cursor: pointer;
`;
export const CotizationButton = styled.div`
  color: black;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
`;

export const ChangeUbicationIcon = styled(SyncAltIcon)``;

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

export const CardImage = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 16px;
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

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  border-top: 1px solid #f4f0f0;
  background-color: white;
  padding: 16px;
`;

export const FooterLink = styled.a<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  flex: 1;
  color: ${(props) => (props.active ? "#181111" : "#896161")};
  position: fixed;
  background: #e72925;
  bottom: 0px;
  z-index: 100;
`;

export const FooterIcon = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;
