import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { useGetNftsQuery } from "../../../../reducers/coinsApi";

const NftsItem = ({ id }) => {
  const theme = useTheme();

  const { data } = useGetNftsQuery(id);

  return (
    <Box
      sx={{
        display: "flex!important",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "16px",
        width: "241px !important",
        height: "212px",
        borderRadius: "12px",
        padding: "16px 12px",
        backgroundColor: "background.paper",
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#303241" : "#DADADC"
        }`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Avatar src={data?.image.small} />
        <Typography
          variant="body2"
          sx={{
            letterSpacing: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
          }}
        >
          {`${data?.name} (24h)`}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontStyle: "normal",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          overflow: "hidden",
          color: "#666873",
        }}
      >
        {data?.description}
      </Typography>
      <Box>
        <Typography variant="body2" sx={{ letterSpacing: 1 }} gutterBottom>
          Current Bid
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textTransform: "capitalize",
            letterSpacing: 1,
            color: "#666873",
          }}
        >
          ${`${data?.floor_price.usd.toLocaleString()} ${
            data?.asset_platform_id
          }`}
        </Typography>
      </Box>
    </Box>
  );
};

export default NftsItem;
