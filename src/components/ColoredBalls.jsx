import { Box } from "@mui/material";

const ColoredBalls = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "274px",
          height: "274px",
          opacity: "0.15",
          left: "-33px",
          top: "181px",
          filter: "blur(50px)",
          background: "rgba(32, 205, 126, 1)",
          zIndex:-1
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "274px",
          height: "274px",
          opacity: "0.1",
          // left: "976px",
          right: {xs:0,lg:190},
          top: "-90px",
          filter: "blur(50px)",
          background: " rgba(247, 68, 64, 1)",
          zIndex:-1
        }}
      />
    </>
  );
};

export default ColoredBalls;
