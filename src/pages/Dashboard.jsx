import { useTheme, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";

import TrendingCoins from "../components/pages/dashboard/TrendingCoins";

const Dashboard = () => {
  const status = useSelector((state) => state.trendingCoins.status);

  return (
    <Box sx={{ pl: 2 }}>
      <Grid container>
        <Grid xs={12} md={8.7}>
          <TrendingCoins />
        </Grid>
        <Grid xs={12} md={3.3}>
          2
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
