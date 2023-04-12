import { Box } from "@mui/material";
import Logo from "./Logo";

const Sidebar = () => {
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
        borderRight: "1px solid #22202A",
      }}
    >
      <Logo />
    </Box>
  );
};

export default Sidebar;
