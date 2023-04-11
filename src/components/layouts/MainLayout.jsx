import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../../theme";
import { CssBaseline } from "@mui/material";

const MainLayout = ({ children, mode }) => {
    console.log(mode);
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  );
};

export default MainLayout;
