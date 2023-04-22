import { Box, Typography } from "@mui/material";

const CoinListHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        padding: "0 19px",
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: "#666873", width: "min(100%,100px)" }}
      >
        #
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "#666873", width: "min(100%,460px)" }}
      >
        coin
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "#666873", width: "min(100%,143px)" }}
      >
        price
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: "#666873",
          width: "min(100%,106px)",
          display: { xs: "none", sm: "block" },
        }}
      >
        1h
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: "#666873",
          width: "min(100%,106px)",
          display: { xs: "none", sm: "block" },
        }}
      >
        24h
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: "#666873",
          width: "min(100%,185px)",
          display: { xs: "none", md: "block" },
        }}
      >
        last update
      </Typography>
    </Box>
  );
};

export default CoinListHeader;
