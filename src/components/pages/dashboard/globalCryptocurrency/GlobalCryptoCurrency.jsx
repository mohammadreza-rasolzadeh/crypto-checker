import { Box } from "@mui/material";

import {
  GlobalCryptoCurrencyTitle,
  GlobalCryptoCurrencyHeader,
  GlobalCryptoCurrencyItem,
} from "./";

const GlobalCryptoCurrency = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <GlobalCryptoCurrencyTitle />
      <Box sx={{ pt: 2 }}>
        <GlobalCryptoCurrencyHeader />
        <Box sx={{ marginTop: "10px" }}>
          <GlobalCryptoCurrencyItem />
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalCryptoCurrency;
