import { createTheme } from "@mui/material";
import theme from "..";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.main.color,
      contrastText: theme.colors.background,
    },
    secondary: {
      main: theme.colors.background,
      contrastText: theme.main.color,
    },
    info: {
      main: theme.colors.primary,
      contrastText: theme.colors.background,
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
