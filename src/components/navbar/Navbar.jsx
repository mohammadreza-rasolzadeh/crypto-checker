import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import { MobileMenu, SearchBox, MenuIcons, MoreButton } from "./";
import SwitchMode from "./SwitchMode";

const Navbar = ({handleThemeChange}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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

  useEffect(() => {
    if (isMdUp) {
      setMobileMoreAnchorEl(null);
    }
  }, [isMdUp]);

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
          <SwitchMode handleThemeChange={handleThemeChange} />
          <MenuIcons handleProfileMenuOpen={handleProfileMenuOpen} />
          <MoreButton
            mobileMenuId={mobileMenuId}
            handleMobileMenuOpen={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </Box>
  );
};

export default Navbar;
