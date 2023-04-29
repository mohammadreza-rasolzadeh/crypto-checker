import { Link } from "react-router-dom";
import { useTheme, Box, Typography, Avatar } from "@mui/material";
import { green, red } from "@mui/material/colors";

const CategoryItem = ({ index, category }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
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
      <Box
        sx={{
          width: "min(100%,30px)",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Typography variant="body2" sx={{ color: "#666873" }}>
          {index + 1}
        </Typography>
      </Box>
      <Box sx={{ width: 230 }}>
        <Link
          to={`/categories/${category.id}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.primary", letterSpacing: 1 }}
          >
            {category.name}
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          width: 120,
          display: "flex",
          gap: 1,
        }}
      >
        {category.top_3_coins.map((item, index) => (
          <Avatar
            key={index}
            variant="square"
            sx={{ width: "30px", height: "30px" }}
            src={item}
          />
        ))}
      </Box>
      <Box
        sx={{
          width: 58,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color:
              category?.market_cap_change_24h > 0 ? green["A700"] : red["A700"],
          }}
        >
          {category?.market_cap_change_24h.toFixed(1)}%
        </Typography>
      </Box>
      <Box
        sx={{
          width: 140,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography variant="caption">
          ${category?.market_cap.toLocaleString()}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 120,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="caption" sx={{ color: "#666873" }}>
          {new Date(category?.updated_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoryItem;
