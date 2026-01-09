import { Box, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "./components/sidebar";
import Stats from "./components/stat";
import ProjectsTable from "./components/projectTable";
import ActivityTable from "./components/activityTable";

const App: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box display="flex" minHeight="100vh" bgcolor="#f5f5f5">
      <Sidebar />

      <Box
        component="main"
        flexGrow={1}
        p={isMobile ? 2 : 3}
        pb={isMobile ? 8 : 3}
      >
        <Typography variant="h4" fontWeight={700}>
          Admin Dashboard
        </Typography>
        <Typography color="text.secondary" mb={3}>
          System Overview
        </Typography>

        <Stats />
        <ProjectsTable />
        <ActivityTable />
      </Box>
    </Box>
  );
};

export default App;
