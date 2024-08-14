import theme from "@/globals/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  padding-bottom: 8px;
  background: ${theme.main.color};
  flex-direction: row;

  position: fixed;
  z-index: 100;

  @media (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Icon = styled.div`
  color: #181111;
  width: 40px;
  height: 40px;
`;

export const SearchBar = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  background: ${theme.main.color};

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
