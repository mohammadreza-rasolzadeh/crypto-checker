import { Box, Typography, useTheme } from "@mui/material";

const GlobalCryptoCurrencyItem = () => {
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
          1
        </Typography>
      </Box>
      <Box sx={{ width: 230 }}>
        <Typography
          variant="caption"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
          }}
        >
          Defi Market Capitalization in USD
        </Typography>
      </Box>
      <Box
        sx={{
          width: 140,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography variant="caption">
          ${(47763777239.372263986423963726).toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default GlobalCryptoCurrencyItem;
