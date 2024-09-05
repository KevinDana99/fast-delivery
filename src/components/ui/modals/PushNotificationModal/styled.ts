import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
export const IconClose = styled(CloseIcon)`
  cursor: "pointer";
  @media (max-width: 700px) {
    cursor: default;
  }
`;
