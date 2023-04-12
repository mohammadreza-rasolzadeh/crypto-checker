import { Box, Tab, Tabs, Tooltip, Zoom } from "@mui/material";

import tabsInfo from "./tabsInfo";

function tabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SidebarTabs = ({ value, handleChange }) => {
  
  return (
    <Box
      sx={{
        position: "absolute",
        top: "148px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        ".MuiTabs-indicator": {
          top: "0px",
          height: "48px",
          width: "4px",
          borderRadius: "21px",
          background:
            "linear-gradient(rgb(42, 214, 241) 0%, rgb(88, 96, 227) 100%)",
        },
        ".MuiTab-root.Mui-selected": {
          // color: "#2ad6f1",
        },
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: 64 }}
      >
        {tabsInfo.map((info, index) => (
          <Tooltip
            key={index}
            title={info.title}
            placement="right"
            TransitionComponent={Zoom}
            arrow
          >
            <Tab
              icon={info.icon}
              aria-label={info.title}
              {...tabProps(index)}
              sx={{ 
                minWidth: 0,
                // maxWidth:'24px',
                // width:'24px'
             }}
            />
          </Tooltip>
        ))}
      </Tabs>
    </Box>
  );
};

export default SidebarTabs;
