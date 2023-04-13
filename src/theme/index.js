import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    typography: {
        fontFamily: "Poppins",
    },
    palette: {
        mode: "dark",
        background: {
            default: "#181A25",
            paper: "#12131C",
        },
        divider: "#22202A",
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#E9EDFD",
            paper: "#FFFFFF",
        },
    },
});