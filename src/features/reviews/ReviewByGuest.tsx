import { Stack, Typography } from "@mui/material";
import Flag from "../../components/Flag";

function ReviewByGuest() {
  return (
    <Stack
      spacing={1.5}
      sx={{ pb: "1rem", borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      <Typography fontWeight="bold" fontSize="1.2rem">
        8/10 Good
      </Typography>
      <Stack spacing={0.5}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography fontWeight="bold" fontSize="1rem">
            Guest Name
          </Typography>
          <Flag countryCode="th" />
        </Stack>
        <Typography fontWeight="normal" fontSize="1rem">
          Nov 16, 2023 (date of review)
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography fontSize="1.3rem" fontWeight="bold">
          reviews title
        </Typography>
        <Typography fontSize="1rem" fontWeight="normal">
          My recent stay at Harmony Haven Hotel was absolutely fantastic! From
          the moment I arrived, I was greeted with warm smiles and exceptional
        </Typography>
      </Stack>
      <Typography fontSize="0.9rem">Stayed 2 nights in Feb 2024</Typography>
    </Stack>
  );
}

export default ReviewByGuest;
