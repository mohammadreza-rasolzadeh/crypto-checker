import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import CoinItem from "./CoinItem";
import CoinListTitle from "./CoinListTitle";
import CoinListHeader from "./CoinListHeader";
import { fetchCoinList } from "../../../reducers/coinSlice";

const CoinList = () => {
  const dispatch = useDispatch();

  const coins = useSelector((state) => state.cryptoCurrency.coins);

  useEffect(() => {
    dispatch(fetchCoinList());
  }, [dispatch, fetchCoinList]);

  return (
    <Box sx={{ mb: 5 }}>
      <CoinListTitle />
      <Box sx={{ pt: 2 }}>
        <CoinListHeader />
        <Box sx={{ marginTop: "10px" }}>
          {coins.slice(0, 5).map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}
        </Box>
      </Box>
      {/* <TableContainer sx={{ pt: 1 }}>
        <Table aria-label="coin table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "none" }}>#</TableCell>
              <TableCell sx={{ border: "none" }}>Coin</TableCell>
              <TableCell align="right" sx={{ border: "none" }}>
                Price
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  border: "none",
                }}
              >
                24h
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  border: "none",
                }}
              >
                7d
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  border: "none",
                }}
              >
                last update
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins?.slice(0, 4).map((coin, index) => (
              <Coin key={index} coin={coin} />
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Box>
  );
};

export default CoinList;
