import { useEffect } from "react";
import { useTheme, Box, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { KeyboardArrowRight } from "@mui/icons-material";
import Slider from "react-slick";

import {
  useGetNftsListQuery,
  useGetNftsQuery,
} from "../../../reducers/coinsApi";
import { getNfts } from "../../../services/cryptoServices";
import NftsItem from "./NftsItem";
import { fetchNftsList } from "../../../reducers/coinSlice";

const NftsList = () => {
  const theme = useTheme();

  // const dispatch = useDispatch();
  // const data = useSelector(state => state.trendingCoins.nftsList);

  const { data } = useGetNftsListQuery();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
  };

  // useEffect(() => {
  //   dispatch(fetchNftsList())
  // },[])

  return (
    <Box sx={{ my: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "24px" }}>Top NFT</Typography>
        <Link to="/nfts" style={{ textDecoration: "none" }}>
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
      <Box sx={{ mt: "12px" }}>
        <Slider {...settings}>
          {data?.slice(0, 8).map((coin, index) => (
            <NftsItem key={index} {...coin} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default NftsList;
