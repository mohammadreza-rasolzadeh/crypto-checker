import { useTheme, Box } from "@mui/material";
import { PacmanLoader } from "react-spinners";

const Spinner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PacmanLoader
        size={30}
        color={theme.palette.mode === "dark" ? "#003892" : "#001E3C"}
      />
    </Box>
  );
};

export default Spinner;
