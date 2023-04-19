import { useTheme, Box, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { KeyboardArrowRight } from "@mui/icons-material";
import Slider from "react-slick";

import TrendingCoins from "../components/pages/dashboard/TrendingCoins";
import NftsList from "../components/pages/dashboard/NftsList";

const Dashboard = () => {
  const theme = useTheme();
  const status = useSelector((state) => state.cryptoCurrency.status);

  return (
    <Box sx={{ pl: 2 }}>
      <Grid container>
        <Grid xs={12} md={8.7}>
          <TrendingCoins />
          <NftsList />
        </Grid>
        <Grid xs={12} md={3.3}>
          2
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
