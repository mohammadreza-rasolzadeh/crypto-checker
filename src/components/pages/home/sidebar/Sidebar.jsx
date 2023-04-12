import { Box } from "@mui/material";
import { useTheme } from "@mui/system";

import SidebarTabs from "./SidebarTabs";
import Logo from "./Logo";

const Sidebar = ({ value, handleChange }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: 64,
        height: "100vh",
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
