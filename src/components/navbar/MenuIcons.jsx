import {
  useTheme,
  Box,
  Typography,
  Avatar,
  IconButton,
  Badge,
} from "@mui/material";
import { FavoriteBorderRounded, Notifications } from "@mui/icons-material";
import { orange } from "@mui/material/colors";

const MenuIcons = ({ handleProfileMenuOpen }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
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
            <Notifications
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
          aria-haspopup="true"
          color="inherit"
          onClick={handleProfileMenuOpen}
        >
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
  );
};

export default MenuIcons;
