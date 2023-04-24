import { useTheme, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";

import TrendingCoins from "../components/pages/dashboard/TrendingCoins";
import NftsList from "../components/pages/dashboard/NftsList";
import CoinList from "../components/pages/dashboard/CoinList";
import { useState } from "react";
import Exchange from "../components/pages/dashboard/Exchange";

const Dashboard = () => {
  const theme = useTheme();
  const status = useSelector((state) => state.cryptoCurrency.status);

  return (
    <Box sx={{ px: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8.6}>
          <TrendingCoins />
          <NftsList />
          <CoinList />
        </Grid>
        <Grid xs={12} md={3.4}>
          <Exchange />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
