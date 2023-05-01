import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import {
  TrendingCoins,
  NftsList,
  CoinList,
  Exchange,
  CategoriesList,
  GlobalCryptoCurrency,
} from "../components/pages/dashboard";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const status = useSelector((state) => state.cryptoCurrency.status);

  return (
    <Box sx={{ px: 2, pt: 4 }}>
      {status && status === "pending" ? (
        <Spinner/>
        ) : (
        <Grid container spacing={2}>
          <Grid xs={12} md={7.8} xl={9}>
            <TrendingCoins />
            <NftsList />
            <CoinList />
            <CategoriesList />
          </Grid>
          <Grid xs={12} md={4.2} xl={3}>
            <Exchange />
            <GlobalCryptoCurrency />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Dashboard;
