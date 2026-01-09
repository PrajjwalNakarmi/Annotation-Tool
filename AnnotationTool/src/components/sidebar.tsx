import {
  Box,
  Drawer,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LabelIcon from "@mui/icons-material/Label";
import { useState } from "react";

const drawerWidth = 220;

const Sidebar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [value, setValue] = useState(0);

  if (isMobile) {
    return (
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
        }}
      >
        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
        <BottomNavigationAction label="User" icon={<PersonIcon />} />
        <BottomNavigationAction label="Tags" icon={<LabelIcon />} />
      </BottomNavigation>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#0f172a",
          color: "#fff",
          p: 2,
        },
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={4}>
        Annotation Tool
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <Typography sx={{ cursor: "pointer", color: "#60a5fa" }}>
          Dashboard
        </Typography>
        <Typography sx={{ cursor: "pointer" }}>User</Typography>
        <Typography sx={{ cursor: "pointer" }}>Tags</Typography>
      </Box>

      <Box mt="auto" pt={2} borderTop="1px solid #334155">
        <Typography fontWeight={600}>Username</Typography>
        <Typography variant="body2" color="#94a3b8">
          Role: Admin
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
