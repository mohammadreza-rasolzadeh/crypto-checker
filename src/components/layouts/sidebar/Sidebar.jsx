import {useTheme, Box } from "@mui/material";

import Logo from "./Logo";
import SidebarTabs from "./SidebarTabs";

const Sidebar = ({ value, handleChange }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: 64,
        height: "100%",
        backgroundColor: "background.paper",
        borderRight: `1px solid ${
          theme.palette.mode === "dark" ? "#22202A" : "#DCDCDC"
        }`,
      }}
    >
      <Logo />
      <SidebarTabs value={value} handleChange={handleChange} />
    </Box>
  );
};

export default Sidebar;
