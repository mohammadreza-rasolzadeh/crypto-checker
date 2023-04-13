import { useEffect, useState } from "react";
import { useMediaQuery, Box, Tabs, Tab } from "@mui/material";
import { HomeRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Logo from "./components/pages/home/sidebar/Logo";
import Sidebar from "./components/pages/home/sidebar/Sidebar";
import ColoredBalls from "./components/ColoredBalls";
import Navbar from "./components/Navbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const App = () => {
  const [mode, setMode] = useState();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  return (
    <MainLayout mode={mode}>
      <ColoredBalls />
      <Grid xs={2.1} sm={1.17} md={.8} lg={0.55} xl={.5}>
        <Sidebar value={value} handleChange={handleChange} />
      </Grid>
      <Grid xs={9.9} sm={10.83} md={11.2} lg={11.45} xl={11.5}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          <TabPanel value={value} index={0}>
            {/* <Home /> */}
          </TabPanel>
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default App;
