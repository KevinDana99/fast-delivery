import theme from "@/globals/theme";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
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
export const IconCancel = styled(CancelIcon)`
  visibility: hidden;
  color: #afa7a7;
`;
export const SearchInputWrapper = styled.div`
  &:hover {
    ${IconCancel} {
      visibility: visible;
    }
  }
  display: flex;
  width: 100%;
  flex: 1;
  align-items: stretch;
  border-radius: 16px;
  height: 100%;
  background-color: #f4f0f0;
  position: relative;
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

export const CancelContainerButton = styled.button`
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

export const Select = styled.div<{ visible: boolean }>`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 55px;
  box-sizing: border-box;
  z-index: 10;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
`;
export const Option = styled.div`
  color: black;
  font-size: 16px;
  padding: 15px;
  box-sizing: border-box;
  z-index: 10;
  border-bottom: solid 1px lightgray;
  width: 100%;
  height: 40px;
`;
