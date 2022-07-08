import "@fontsource/roboto/latin-300.css";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";

import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    spacing: 10,
    shape: {
      borderRadius: 10
    }
  })
);

export default theme;