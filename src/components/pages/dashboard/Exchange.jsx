import {
  useTheme,
  Box,
  Avatar,
  Typography,
  IconButton,
  Autocomplete,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { Sync, TrendingFlat } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useMemo, useState } from "react";
import { fetchExchangeCoin, fetchExchanges } from "../../../reducers/coinSlice";

const Exchange = () => {
  const theme = useTheme();

  const data = useSelector((state) => state.cryptoCurrency.exchangeCoin);

  const [selectedCoin, setSelectedCoin] = useState();

  const dispatch = useDispatch();

  const exchanges = useSelector((state) => state.cryptoCurrency.exchanges);

  const handleSelectExchange = (id) => {
    setSelectedCoin(id);
    dispatch(fetchExchangeCoin(id));
  };

  useEffect(() => {
    dispatch(fetchExchanges());
  }, []);

  return (
    <Box
      sx={{
        width: 1,
        maxWidth: "460px",
        minHeight: "340px",
        backgroundColor: "background.paper",
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#303241" : "#DADADC"
        }`,
        borderRadius: "12px",
        padding: "20px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">Exchange</Typography>
        <IconButton>
          <Sync />
        </IconButton>
      </Box>
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Autocomplete
            sx={{
              width: 1,
              // maxWidth: 308,
              mt: "12px",
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                outlineColor: "none",
                borderRadius: "12px",
                height: "50px !important",
              },
            }}
            options={exchanges}
            autoHighlight
            onChange={(event, newValue) => {
              handleSelectExchange(newValue.id);
            }}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <Typography variant="body2" sx={{ mr: 2 }}>
                  {option.trust_score_rank}
                </Typography>
                <img
                  loading="lazy"
                  width="30"
                  src={option.image}
                  srcSet={`${option.image} 2x`}
                  alt={option.name}
                  style={{ borderRadius: "50%" }}
                />
                {option.name}
              </Box>
            )}
            renderInput={(params) => <TextField label="exchange" {...params} />}
          />
        </Box>
        {selectedCoin &&
          data.tickers?.slice(0, 3).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: 1,
                // maxWidth: "308px",
                minHeight: "50px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1,
                mt: 2,
                padding: "8px 16px",
                border: `1px solid ${
                  theme.palette.mode === "dark" ? "#303241" : "#DADADC"
                }`,
                borderRadius: "12px",
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "stretch", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ textTransform: "capitalize", letterSpacing: 1 }}
                >
                  {item.coin_id}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#666873", letterSpacing: 1 }}
                >
                  {item.base}
                </Typography>
              </Box>
              <TrendingFlat />
              <Box sx={{ display: "flex", alignItems: "stretch", gap: 1 }}>
                <Typography variant="body2" sx={{ color: "#666873" }}>
                  ${item.last}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textTransform: "capitalize", letterSpacing: 1 }}
                >
                  {item.target_coin_id}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#666873", letterSpacing: 1 }}
                >
                  {item.target}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Exchange;
