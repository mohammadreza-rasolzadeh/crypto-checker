import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

const CoinList = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography sx={{ fontSize: "24px" }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <Link to="/coins" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "4px",
              color: "text.primary",
              "&:hover": { color: "text.secondary" },
            }}
          >
            see all <KeyboardArrowRight />
          </Typography>
        </Link>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Avatar
            src={`https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579`}
          />
          <Box>
            <Typography>BitCoin</Typography>
            <Typography variant="caption" color="text.secondary">
              BTC
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography>$28,921.44</Typography>
          <Typography variant="caption" sx={{ color: green["A700"] }}>
            -1.6%
          </Typography>
        </Box>
      </Box> */}
      <TableContainer
        component="paper"
        sx={{ backgroundColor: "background.paper", pt: 1 }}
      >
        <Table aria-label="coin table">
          <TableHead>
            <TableRow>
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
            <TableRow
              sx={{
                backgroundColor: "background.paper",
                " .MuiTableRow-root": { borderRadius: "20px !important" },
              }}
            >
              <TableCell
                sx={{
                  color: "text.secondary",
                  borderColor:
                    theme.palette.mode === "dark" ? "#303241" : "#DADADC",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Avatar
                    src={`https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579`}
                  />
                  BitCoin
                </Box>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderColor:
                    theme.palette.mode === "dark" ? "#303241" : "#DADADC",
                }}
              >
                $28,921.44
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  color: green["A700"],
                  borderColor:
                    theme.palette.mode === "dark" ? "#303241" : "#DADADC",
                }}
              >
                {" "}
                -1.6%{" "}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  color: green["A700"],
                  borderColor:
                    theme.palette.mode === "dark" ? "#303241" : "#DADADC",
                }}
              >
                {" "}
                -3.3%{" "}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                  color: "text.secondary",
                  borderColor:
                    theme.palette.mode === "dark" ? "#303241" : "#DADADC",
                }}
              >
                {" "}
                2023-04-20{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CoinList;
