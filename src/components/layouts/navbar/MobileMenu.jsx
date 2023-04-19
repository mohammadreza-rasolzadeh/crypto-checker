import {
  AccountCircle,
  FavoriteBorderRounded,
  Notifications,
} from "@mui/icons-material";
import { useTheme, Badge, IconButton, Menu, MenuItem } from "@mui/material";

const MobileMenu = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}) => {
  const theme = useTheme();

  return (
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
            <FavoriteBorderRounded
              sx={{
                fontSize: "24px",
                color: theme.palette.mode === "light" && "#A6A9B3",
              }}
            />
          </Badge>
        </IconButton>
        <p style={{ color: theme.palette.mode === "light" && "#666873" }}>
          Favorites
        </p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <Notifications
              sx={{
                fontSize: "24px",
                color: theme.palette.mode === "light" && "#A6A9B3",
              }}
            />
          </Badge>
        </IconButton>
        <p style={{ color: theme.palette.mode === "light" && "#666873" }}>
          Notifications
        </p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle
            sx={{
              fontSize: "24px",
              color: theme.palette.mode === "light" && "#A6A9B3",
            }}
          />
        </IconButton>
        <p style={{ color: theme.palette.mode === "light" && "#666873" }}>
          Profile
        </p>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
