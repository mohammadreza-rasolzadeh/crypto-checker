import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { darkTheme, lightTheme } from "../../theme";

const MainLayout = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
