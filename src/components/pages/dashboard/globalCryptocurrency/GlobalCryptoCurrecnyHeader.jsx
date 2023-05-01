import { Box, Typography } from "@mui/material";

const GlobalCryptoCurrencyHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        padding: "0 19px",
      }}
    >
      <Box sx={{ width: "min(100%,30px)" }}>
        <Typography variant="caption" sx={{ color: "#666873" }}>
          #
        </Typography>
      </Box>
      <Box sx={{ width: 230 }}>
        <Typography variant="caption" sx={{ color: "#666873" }}>
          Description
        </Typography>
      </Box>

      <Box
        sx={{
          width: 140,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography variant="caption" sx={{ color: "#666873" }}>
        Details
        </Typography>
      </Box>
    </Box>
  );
};

export default GlobalCryptoCurrencyHeader;
