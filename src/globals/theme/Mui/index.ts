import { createTheme } from "@mui/material";
import theme from "..";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.background,
      contrastText: theme.main.color,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    background: {
      default: theme.colors.background,
    },
    text: {
      primary: theme.main.color,
    },
  },
});

export default muiTheme;
