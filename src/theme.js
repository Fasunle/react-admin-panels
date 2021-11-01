import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#b388ff",
      light: "#e7b9ff",
      dark: "#805acb",
    },
    secondary: {
      main: "#f3e5f5",
      light: "#fffff",
      dark: "#c0b3c2",
    },
    text: {
      primary: "#424242",
      secondary: "#eeeeee",
    },
    divider: "rgba(194,136,197,0.12)",
  },
};
export default createTheme(themeOptions);
