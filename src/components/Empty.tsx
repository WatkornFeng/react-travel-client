import { Typography } from "@mui/material";

function Empty({ resourceName }: { resourceName: string }) {
  return <Typography>No {resourceName} could be found.</Typography>;
}

export default Empty;
