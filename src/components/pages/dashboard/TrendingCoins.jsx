import { useTheme, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import { selectTrendingCoins } from "../../../reducers/coinSlice";

const TrendingCoins = () => {
    const theme = useTheme();

    const coins = useSelector((state) => selectTrendingCoins(state));

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      variableWidth: true,
    };
  
  return (
    <Slider {...settings}>
      {coins?.map((coin, index) => (
        <Box
          key={index}
          sx={{
            display: "flex!important",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            width: "241px !important",
            height: "120px",
            borderRadius: "12px",
            padding: "16px 12px",
            backgroundColor: "background.paper",
            border: `1px solid ${
              theme.palette.mode === "dark" ? "#303241" : "#DADADC"
            }`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Avatar
              sx={{ width: "24px", height: "24px" }}
              src={coin.item.small}
            />
            <Typography variant="body2" sx={{ letterSpacing: 1 }}>
              {`${coin.item.name} (24h)`}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", letterSpacing: 1 }}
              gutterBottom
            >
              Current Value
            </Typography>
            <Typography variant="body2">
              <Typography component="span" sx={{ color: "text.secondary" }}>
                $
              </Typography>{" "}
              {coin.item.price_btc}
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default TrendingCoins;
