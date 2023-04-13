import { Box, InputBase, TextField } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            width: "404px",
            height: "50px",
            background: " linear-gradient(180deg, #171822 0%, #171822 100%)",
            border: "1px solid #303241",
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
            placeholder="Search market"
            sx={{fontSize:'1rem',fontWeight:400, color: "#666873" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
