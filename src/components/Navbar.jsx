import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { FavoriteBorderRounded } from "@mui/icons-material";
import { Avatar, Typography, useTheme } from "@mui/material";
import { orange, deepOrange } from "@mui/material/colors";

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              width: "404px",
              height: "50px",
              backgroundColor: "background.paper",
                border: `1px solid ${
                  theme.palette.mode === "dark" ? "#303241" : "#DADADC"
                }`,
              padding: " 13px 16px",
              borderRadius: "12px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
              style={{ width: "24px", height: "24px", color: "#A6A9B3" }}
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            <InputBase
              type="search"
              placeholder="Search market"
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "#666873",
                width: 1,
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
                padding: "13px 16px",
                // background: "linear-gradient(180deg, #171822 0%, #171822 100%)",
                // background: "paper.background",
                backgroundColor: "background.paper",
                // border: "1px solid #303241",
                border: `1px solid ${
                  theme.palette.mode === "dark" ? "#303241" : "#DADADC"
                }`,

                borderRadius: "12px",
              }}
            >
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="error" variant="dot">
                  <FavoriteBorderRounded
                    sx={{
                      fontSize: "24px",
                      color: theme.palette.mode === "light" && "#A6A9B3",
                    }}
                  />
                </Badge>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
                padding: "13px 16px",
                backgroundColor: "background.paper",
                border: `1px solid ${
                  theme.palette.mode === "dark" ? "#303241" : "#DADADC"
                }`,
                borderRadius: "12px",
              }}
            >
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="error" variant="dot">
                  <NotificationsIcon
                    sx={{
                      fontSize: "24px",
                      color: theme.palette.mode === "light" && "#A6A9B3",
                    }}
                  />
                </Badge>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "192px",
                height: "50px",
                padding: "8px 16px",
                backgroundColor: "background.paper",
                border: `1px solid ${
                  theme.palette.mode === "dark" ? "#303241" : "#DADADC"
                }`,
                borderRadius: "12px",
              }}
              onClick={handleProfileMenuOpen}
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "10px", color: "#666873" }}
              >
                Mojtaba Rasolzadeh
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileMenuOpen}
              >
                {/* <AccountCircle sx={{
                      fontSize: "24px",
                      color: theme.palette.mode === "light" && "#A6A9B3",
                    }} /> */}
                <Avatar
                  sx={{
                    width: "36px",
                    height: "36px",
                    background: orange[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
