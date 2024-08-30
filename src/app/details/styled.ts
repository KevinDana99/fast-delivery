import theme from "@/globals/theme";
import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
  overflow-x: hidden;
  font-family: "Work Sans", "Noto Sans", sans-serif;
  padding-bottom: 50px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem 0.5rem;
  justify-content: space-between;
`;

export const CloseIcon = styled.div`
  color: #0e141b;
  display: flex;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const Title = styled.h2`
  color: #0e141b;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  flex: 1;
  padding-right: 3rem;
`;

export const InputContainer = styled.div`
  display: flex;
  max-width: 480px;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.75rem;
`;

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  flex: 1;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: stretch;
  border-radius: 0.75rem;
  background-color: #e7edf3;
  color: black;
`;

export const InputExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.75rem;
  background-color: #e7edf3;
  color: black;
  padding: 0.7rem;
  box-sizing: border-box;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 0.75rem;
  color: #0e141b;
  background-color: #e7edf3;
  border: none;
  padding: 1rem;
  padding-right: 10px;
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  box-sizing: border-box;
  placeholder {
    color: #4e7397;
  }
  &:focus {
    outline: none;
    ring: 0;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border-radius: 0.75rem;
  color: #0e141b;
  background-color: #e7edf3;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  placeholder {
    color: #4e7397;
  }
  &:focus {
    outline: none;
    ring: 0;
  }
`;
export const StyledInputExtra = styled(StyledInput)`
  padding: 0.3rem;
  box-sizing: border-box;
`;
export const IconWrapper = styled.div`
  color: #4e7397;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7edf3;
  border-radius: 0.75rem;
  padding-right: 1rem;
  border-left: 0;
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
  min-height: 72px;
  justify-content: space-between;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #f8f9fa;
  padding: 0rem 1rem;
  justify-content: space-between;
`;
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemName = styled.p`
  color: #0e141b;
  font-size: 1rem;
  font-weight: medium;
  line-clamp: 1;
`;

export const ItemPrice = styled.p`
  color: #4e7397;
  font-size: 0.875rem;
  font-weight: normal;
  line-clamp: 2;
`;

export const ItemQuantity = styled.div`
  flex-shrink: 0;
  p {
    color: #0e141b;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const PayButton = styled.button`
  display: flex;
  min-width: 84px;
  max-width: 480px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.75rem;
  height: 3rem;
  padding: 0 1.25rem;
  background-color: #1980e6;
  color: #f8f9fa;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  line-height: normal;
  tracking: 0.015em;
`;

export const LogoContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)``;
