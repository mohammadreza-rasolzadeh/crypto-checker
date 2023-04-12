import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "15px",
        top: "23px",
        width: "34px",
        height: "36px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "14px",
          height: "36px",
          borderRadius: "100px",
          background: "rgba(36, 230, 243, 1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "16.5px",
          width: "16px",
          height: "16px",
          borderRadius: "100px",
          background: "rgba(36, 230, 243, 1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "16.5px",
          top: "20px",
          width: "16px",
          height: "16px",
          borderRadius: "100px",
          background: "rgba(36, 230, 243, 1)",
        }}
      />
    </Box>
  );
};

export default Logo;
