import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2';

import { darkTheme, lightTheme } from "../../theme";

const MainLayout = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container sx={{ height: "100vh"}}>
        {children}
      </Grid>
    </ThemeProvider>
  );
};

export default MainLayout;
