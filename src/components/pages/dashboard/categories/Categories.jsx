import { Link } from "react-router-dom";
import { useTheme, Box, Typography, Avatar } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const Categories = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 2 }}>
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
      <Box sx={{ pt: 2 }}>
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
        <Box sx={{ marginTop: "10px" }}>
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
                1
              </Typography>
            </Box>
            <Box sx={{ width: 230 }}>
              <Link
                // to={`/coins/${coin.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", letterSpacing: 1 }}
                >
                  Smart Contract Platform
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
              <Avatar
                variant="square"
                sx={{ width: "24px", height: "25px" }}
                src="https://assets.coingecko.com/coins/images/29240/thumb/empire.jpeg?1677572473"
              />
              <Avatar
                variant="square"
                sx={{ width: "24px", height: "25px" }}
                src="https://assets.coingecko.com/coins/images/27776/thumb/Transparent_Logo.png?1665728441"
              />
              <Avatar
                variant="square"
                sx={{ width: "24px", height: "25px" }}
                src="https://assets.coingecko.com/coins/images/29240/thumb/empire.jpeg?1677572473"
              />
            </Box>
            <Box
              sx={{
                width: 58,
                display: { xs: "none", sm: "block" },
              }}
            >
              <Typography
                variant="caption"
                sx={
                  {
                    // color:
                    //   coin?.price_change_percentage_1h_in_currency > 0
                    //     ? green["A700"]
                    //     : red["A700"],
                  }
                }
              >
                {/* {coin?.price_change_percentage_1h_in_currency.toFixed(1)}% */}
                1.9%
              </Typography>
            </Box>
            <Box
              sx={{
                width: 140,
                display: { xs: "none", sm: "block" },
              }}
            >
              <Typography variant="caption">$898,241,605,817</Typography>
            </Box>
            <Box
              sx={{
                width: 120,
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography variant="caption" sx={{ color: "#666873" }}>
                {/* {new Date(coin?.last_updated).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })} */}
                Apr 28, 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
