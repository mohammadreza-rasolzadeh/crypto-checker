import { useTheme, Box, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const MoreButton = ({ mobileMenuId, handleMobileMenuOpen }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreVert sx={{ color: theme.palette.mode === "light" && "#A6A9B3" }} />
      </IconButton>
    </Box>
  );
};

export default MoreButton;
