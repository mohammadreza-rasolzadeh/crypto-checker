import { useEffect, useState } from "react";
import { useMediaQuery, Box, Tabs, Tab } from "@mui/material";

import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import ColoredBalls from "./components/ColoredBalls";
import Navbar from "./components/layouts/navbar/Navbar";

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

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  return (
    <MainLayout mode={mode}>
      <ColoredBalls />
      <Sidebar value={value} handleChange={handleChange} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "calc(100% - 64px)",
        }}
      >
        <Navbar handleThemeChange={handleThemeChange} />
        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>
      </Box>
    </MainLayout>
  );
};

export default App;
