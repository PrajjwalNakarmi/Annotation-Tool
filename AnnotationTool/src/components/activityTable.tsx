import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ActivityTable: React.FC = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        Recent Activity
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Project Alpha</TableCell>
            <TableCell>2024-12-26 14:32</TableCell>
            <TableCell>Error</TableCell>
            <TableCell>Image upload failed</TableCell>
            <TableCell>Uploader</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ActivityTable;
