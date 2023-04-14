import { useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

import { RenderMobileMenu, SearchBox, MenuIcons, MoreButton } from "./";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{
          "&.MuiAppBar-root": {
            background: "none",
            boxShadow: "none",
          },
        }}
      >
        <Toolbar
          sx={{ "&.MuiToolbar-root": { minHeight: 0, padding: "16px" } }}
        >
          <SearchBox />
          <Box sx={{ flexGrow: 1 }} />
          <MenuIcons handleProfileMenuOpen={handleProfileMenuOpen} />
          <MoreButton
            mobileMenuId={mobileMenuId}
            handleMobileMenuOpen={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>
      <RenderMobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </Box>
  );
}
