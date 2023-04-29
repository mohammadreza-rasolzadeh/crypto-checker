import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const CategoriesListTitle = () => {
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
      <Typography sx={{ fontSize: "24px" }}>
        Top Crypto Categories By Market Cap
      </Typography>
      <Link to="/categories" style={{ textDecoration: "none" }}>
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

export default CategoriesListTitle;
