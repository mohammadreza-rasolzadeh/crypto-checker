import { useEffect, useState } from "react";
import { useMediaQuery, Box, Tabs, Tab } from "@mui/material";
import { HomeRounded } from "@mui/icons-material";

import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Logo from "./components/pages/home/sidebar/Logo";
import Sidebar from "./components/pages/home/sidebar/Sidebar";
import ColoredBalls from "./components/ColoredBalls";

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

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

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
      <Sidebar value={value} handleChange={handleChange} />
      {/* <Home /> */}
    </MainLayout>
  );
};

export default App;
