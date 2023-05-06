import { useLocation } from "react-router-dom";
import {
  Box,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { SearchBox } from "../components/layouts/navbar";

const Coins = () => {
  const theme = useTheme();
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ px: 2, pt: 4 }}>
      <Typography variant="h3" sx={{ textAlign: "center", padding: "3rem 0" }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      {/* <TextField type="search" label="Search For a Crypto Currency" fullWidth /> */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        //   width: "404px",
          width: 1,
          margin:'0 auto',
          height: "70px",
          backgroundColor: "background.paper",
          border: `1px solid ${
            theme.palette.mode === "dark" ? "#303241" : "#DADADC"
          }`,
          padding: " 13px 16px",
          borderRadius: "12px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          style={{ width: "24px", height: "24px", color: "#A6A9B3" }}
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <InputBase
          type="search"
          placeholder="Search For a Crypto Currency"
          sx={{
            fontSize: "1rem",
            fontWeight: 400,
            color: "#666873",
            width: 1,
          }}
        />
      </Box>
      <TableContainer sx={{ pt: 1,mt:3 }}>
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
                1h
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
                24h Volume
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  border: "none",
                }}
              >
                Mkt Cap
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  border: "none",
                }}
              >
                Last 7 Days
              </TableCell>
              {/* <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  border: "none",
                }}
              >
                last update
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {coins?.slice(0, 4).map((coin, index) => (
              <Coin key={index} coin={coin} />
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Coins;
