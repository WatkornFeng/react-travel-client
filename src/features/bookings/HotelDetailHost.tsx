import { Avatar, Box, Stack, Typography } from "@mui/material";
import Flag from "../../components/Flag";
import { IOwnerProperty } from "../../services/apiHotel.type";

interface IProps {
  ownerProperty: IOwnerProperty;
}

function HotelDetailHost({ ownerProperty }: IProps) {
  return (
    <Stack spacing={3} direction={"row"} alignItems="center">
      <Avatar alt="host images" src={""} />
      <Box>
        <Typography fontWeight="bold">Hosted by</Typography>
        <Typography fontWeight="normal" fontSize="0.9rem">
          {ownerProperty.name}
        </Typography>
        {ownerProperty.locale ? (
          <Flag countryCode={ownerProperty.locale} />
        ) : null}
      </Box>
    </Stack>
  );
}

export default HotelDetailHost;
