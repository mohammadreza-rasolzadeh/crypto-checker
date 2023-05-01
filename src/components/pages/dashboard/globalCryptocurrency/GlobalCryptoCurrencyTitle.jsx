import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GlobalCryptoCurrencyTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Typography variant="body2">
        Cryptocurrency Global Eecentralized Finance(defi) data
      </Typography>
      <Link to="/global" style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "4px",
            color: "text.primary",
            "&:hover": { color: "text.secondary" },
          }}
        >
          see all <KeyboardArrowRight />
        </Typography>
      </Link>
    </Box>
  );
};

export default GlobalCryptoCurrencyTitle;
