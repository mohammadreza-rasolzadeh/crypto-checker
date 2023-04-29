import { Box, Typography } from "@mui/material";

const CategoriesListHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
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
          Category
        </Typography>
      </Box>
      <Box sx={{ width: 120 }}>
        <Typography variant="caption" sx={{ color: "#666873" }}>
          Top Gainers
        </Typography>
      </Box>
      <Box
        sx={{
          width: 58,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography variant="caption" sx={{ color: "#666873" }}>
          24h
        </Typography>
      </Box>
      <Box
        sx={{
          width: 140,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography variant="caption" sx={{ color: "#666873" }}>
          Market Capitalization
        </Typography>
      </Box>
      <Box
        sx={{
          width: 120,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="caption" sx={{ color: "#666873" }}>
          last update
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoriesListHeader;
