import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme, Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import TrendingCoins from "../components/pages/dashboard/TrendingCoins";
import NftsList from "../components/pages/dashboard/NftsList";
import CoinList from "../components/pages/dashboard/CoinList";
import Exchange from "../components/pages/dashboard/Exchange";
import Categories from "../components/pages/dashboard/categories/Categories";

const Dashboard = () => {
  const theme = useTheme();
  const status = useSelector((state) => state.cryptoCurrency.status);

  return (
    <Box sx={{ px: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={7.8} xl={9}>
          <TrendingCoins />
          <NftsList />
          <CoinList />
          <Categories />
        </Grid>
        <Grid xs={12} md={4.2} xl={3}>
          <Exchange />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
