import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import Icon from "../../components/Icon";

import { IAmenities } from "../../services/apiHotel.type";

interface IProps {
  amenities: IAmenities[];
}
function HotelDetailAmentityList({ amenities }: IProps) {
  return (
    <Box
      sx={{
        p: "0.7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <ApartmentIcon />
        <Typography fontWeight="bold">Services</Typography>
      </Box>
      <List
        sx={{
          width: "100%",
        }}
      >
        {amenities.length === 0 && <Typography>No amenities.</Typography>}
        {amenities.map(({ name, svg }, index) => (
          <ListItem key={index}>
            <RadioButtonUncheckedIcon
              sx={{
                fontSize: "0.6rem",
                mr: "0.5rem",
              }}
            />
            <Stack direction="row" spacing={2} alignItems="center">
              <Icon size="1rem" base64Url={svg} />
              <Typography fontWeight="normal">{name}</Typography>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default HotelDetailAmentityList;
