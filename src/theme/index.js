import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#181A25",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: '#E9EDFD'
        },
    },
});