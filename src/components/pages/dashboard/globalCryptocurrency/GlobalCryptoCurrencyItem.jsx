import { Box, Typography, useTheme } from "@mui/material";

const GlobalCryptoCurrencyItem = ({ index, name, value }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 3 },
        height: "70px",
        backgroundColor: "background.paper",
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#303241" : "#DADADC"
        }`,
        borderRadius: "8px",
        padding: "6px 19px",
        marginTop: "4px",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      <Box sx={{ width: "min(100%,30px)" }}>
        <Typography variant="caption" sx={{ color: "#666873" }}>
          {index + 1}
        </Typography>
      </Box>
      <Box sx={{ width: 230 }}>
        <Typography
          variant="caption"
          sx={{
            textTransform: "capitalize",
            letterSpacing: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
          }}
        >
          {name.split("_").join(" ")}
        </Typography>
      </Box>
      <Box sx={{ width: 140 }}>
        <Typography
          variant="caption"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            color: "#666873",
          }}
        >
          {/[\d]+/.test(value) ? `$${Number(value).toLocaleString()}` : value}
        </Typography>
      </Box>
    </Box>
  );
};

export default GlobalCryptoCurrencyItem;
