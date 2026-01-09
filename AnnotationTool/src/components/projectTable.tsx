import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ProjectsTable: React.FC = () => {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" mb={2}>
        Recent Projects
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Images</TableCell>
            <TableCell>Uploader</TableCell>
            <TableCell>Annotators</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Project Alpha</TableCell>
            <TableCell>4500</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>8</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProjectsTable;
