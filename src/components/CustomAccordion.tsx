import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IAmenities } from "../services/apiHotel.type";
import Icon from "./Icon";
interface IProps {
  summary: string;
  amenities: IAmenities[];
}

function CustomAccordion({ summary, amenities }: IProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="amentities-content"
        id="amentities-list"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ApartmentIcon />
          <Typography fontWeight="bold">{summary}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
