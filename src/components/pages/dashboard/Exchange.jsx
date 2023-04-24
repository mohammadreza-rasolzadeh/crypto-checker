import {
  useTheme,
  Box,
  Avatar,
  Typography,
  IconButton,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { Sync, TrendingFlat } from "@mui/icons-material";

const Exchange = () => {
  const theme = useTheme();

  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
      code: "AG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
  ];

  return (
    <Box
      sx={{
        width: "340px",
        height: "340px",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="caption">1</Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666873", letterSpacing: 1 }}
            >
              BTC
            </Typography>
          </Box>
          <TrendingFlat />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ letterSpacing: 1 }}>
              $ 27,597.55
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#666873", letterSpacing: 1 }}
            >
              USDT
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: "10px" }}>
          <Typography sx={{ color: "#666873" }}>Get</Typography>
          <Autocomplete
            id="country-select-demo"
            sx={{
              maxWidth: 300,
              mt: "4px",
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                outlineColor: "none",
                borderRadius: "12px",
                height: "50px !important",
              },
            }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Typography sx={{ mt: "8px", color: "#666873" }}>Pay</Typography>
          <Autocomplete
            id="country-select-demo"
            sx={{
              maxWidth: 300,
              mt: "4px",
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                outlineColor: "none",
                borderRadius: "12px",
                height: "50px !important",
              },
            }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Button
            sx={{
              width: "300px",
              height: "50px",
              mt: "12px",
              borderRadius: "12px",
              background:
                "linear-gradient(108.49deg, #AF53FF 0%, #6EACFE 95.17%)",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            Exchange
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Exchange;
