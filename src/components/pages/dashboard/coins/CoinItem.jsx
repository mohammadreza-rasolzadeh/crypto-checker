import { Link } from "react-router-dom";
import { green, red } from "@mui/material/colors";
import { useTheme, Avatar, Box, Typography, IconButton } from "@mui/material";
import { FavoriteBorderRounded } from "@mui/icons-material";

const CoinItem = ({ coin }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 3 },
        height: "70px",
        backgroundColor: "background.paper",
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#303241" : "#DADADC"
        }`,
        borderRadius: "8px",
        padding: "6px 19px",
        marginTop: "4px",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      <Box
        sx={{
          width: "min(100%,100px)",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <IconButton>
          {/* <FavoriteRounded */}
          <FavoriteBorderRounded fontSize="small" sx={{ color: "#666873" }} />
        </IconButton>
        <Typography
          variant="body2"
          sx={{
            color: "#666873",
            display: { xs: "none", sm: "block" },
          }}
        >
          {coin?.market_cap_rank}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "min(100%,460px)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Avatar src={coin.image} />
        <Link to={`/coins/${coin.id}`} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 0, sm: 1 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.primary",
                letterSpacing: 1,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                overflow: "hidden",
              }}
            >
              {coin?.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#666873",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {coin?.symbol}
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          width: "min(100%,143px)",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 0, sm: 1 },
        }}
      >
        <Typography variant="caption">
          ${coin?.current_price.toLocaleString()}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: { xs: "block", sm: "none" },
            color:
              coin?.price_change_percentage_1h_in_currency > 0
                ? green["A700"]
                : red["A700"],
          }}
        >
          {coin?.price_change_percentage_1h_in_currency.toFixed(1)}%
        </Typography>
      </Box>
      <Box
        sx={{
          width: "min(100%,106px)",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color:
              coin?.price_change_percentage_1h_in_currency > 0
                ? green["A700"]
                : red["A700"],
          }}
        >
          {coin?.price_change_percentage_1h_in_currency.toFixed(1)}%
        </Typography>
      </Box>
      <Box
        sx={{
          width: "min(100%,106px)",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color:
              coin?.price_change_percentage_24h_in_currency > 0
                ? green["A700"]
                : red["A700"],
          }}
        >
          {coin?.price_change_percentage_24h_in_currency.toFixed(1)}%
        </Typography>
      </Box>
      <Box
        sx={{
          width: "min(100%,185px)",
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="caption" sx={{ color: "#666873" }}>
          {new Date(coin?.last_updated).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default CoinItem;

// <TableRow
//   key={coin?.id}
//   sx={{
//     backgroundColor: "background.paper",
//     ".MuiTableRow-root": { borderRadius: "20px !important" },
//   }}
// >
//   <TableCell
//     sx={{
//       color: "text.secondary",
//       borderColor: theme.palette.mode === "dark" ? "#303241" : "#DADADC",
//     }}
//   >
//     {coin?.market_cap_rank}
//   </TableCell>
//   <TableCell
//     sx={{
//       color: "text.secondary",
//       borderColor: theme.palette.mode === "dark" ? "#303241" : "#DADADC",
//     }}
//   >
//     <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
//       <Avatar src={coin?.image} />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           alignItems: { xs: "flex-start", sm: "center" },
//           gap: "8px",
//         }}
//       >
//         <Typography>{coin?.name}</Typography>
//         <Typography sx={{ textTransform: "uppercase", fontSize: "14px" }}>
//           {coin?.symbol}
//         </Typography>
//       </Box>
//     </Box>
//   </TableCell>
//   <TableCell
//     align="right"
//     sx={{
//       borderColor: theme.palette.mode === "dark" ? "#303241" : "#DADADC",
//     }}
//   >
//     $ {coin?.current_price.toLocaleString()}
//   </TableCell>
//   <TableCell
//     align="right"
//     sx={{
//       display: { xs: "none", sm: "table-cell" },
//       color:
//         coin?.price_change_percentage_24h_in_currency > 0
//           ? green["A700"]
//           : red["A700"],
//       borderColor: theme.palette.mode === "dark" ? "#303241" : "#DADADC",
//     }}
//   >
//     {coin?.price_change_percentage_24h_in_currency.toFixed(1)}%
//   </TableCell>
//   <TableCell
//     align="right"
//     sx={{
//       display: { xs: "none", sm: "table-cell" },
//       color:
//         coin?.price_change_percentage_7d_in_currency > 0
//           ? green["A700"]
//           : red["A700"],
//       borderColor: theme.palette.mode === "dark" ? "#303241" : "#DADADC",
//     }}
//   >
//     {coin?.price_change_percentage_7d_in_currency.toFixed(1)}%
//   </TableCell>
//   <TableCell
//     align="right"
//     sx={{
//       fontSize: "14px",
//       display: { xs: "none", sm: "table-cell" },
//       color: "text.secondary",
//       borderColor: theme.palette.mode === "dark" ? "#303241" : "#DADADC",
//     }}
//   >
//     {new Date(coin?.last_updated).toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     })}
//   </TableCell>
// </TableRow>
