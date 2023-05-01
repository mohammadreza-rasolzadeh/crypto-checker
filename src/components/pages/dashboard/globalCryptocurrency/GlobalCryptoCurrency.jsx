import { Box } from "@mui/material";

import {
  GlobalCryptoCurrencyTitle,
  GlobalCryptoCurrencyHeader,
  GlobalCryptoCurrencyItem,
} from "./";
import { useDispatch, useSelector } from "react-redux";
import { fetchGlobalCryptoCurrencyEecentralized } from "../../../../reducers/coinSlice";
import { useEffect } from "react";

const GlobalCryptoCurrency = () => {
  const dispatch = useDispatch();

  const globalCryptoCurrency = useSelector(
    (state) => state.cryptoCurrency.GlobalCryptoCurrencyEecentralized
  );

  useEffect(() => {
    dispatch(fetchGlobalCryptoCurrencyEecentralized());
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <GlobalCryptoCurrencyTitle />
      <Box sx={{ pt: 2 }}>
        <GlobalCryptoCurrencyHeader />
        <Box sx={{ marginTop: "10px" }}>
          {globalCryptoCurrency.data &&
            Object.entries(globalCryptoCurrency?.data).map(
              ([name, value], index) => (
                <GlobalCryptoCurrencyItem
                  key={index}
                  index={index}
                  name={name}
                  value={value}
                />
              )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalCryptoCurrency;
