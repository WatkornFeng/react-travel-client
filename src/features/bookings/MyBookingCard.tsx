import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import useMatchViewPort from "../../hooks/useMatchViewPort";
import ImageSilder from "../../components/ImageSilder";
import MainCard from "../../components/MainCard";
import Statement from "../../components/Statement";
import HotelCardContent from "./HotelCardContent";
import HotelCardHead from "./HotelCardHead";

import {
  IAmenities,
  IHotelImages,
  IPropertyType,
  IProvince,
} from "../../services/apiHotel.type";

interface Props {
  id: string;
  hotel: {
    _id: string;
    name: string;
    stars: number;
    images: IHotelImages[];
    ratingsAverage: number;
    ratingsQuantity: number;
    propertyType: IPropertyType;
    province: IProvince;
    amenities: IAmenities[];
    slug: string;
  };
  price: number;
  createAt: string;
  isPaid: boolean;
}
function MyBookingCard({ booking }: { booking: Props }) {
  const widthViewPort_650 = useMatchViewPort(650);
  const widthViewPort_850 = useMatchViewPort(850);
  const navigate = useNavigate();

  const {
    images,
    name,
    stars,
    ratingsAverage,
    ratingsQuantity,
    propertyType,
    province,
    amenities,
    _id,
    slug,
  } = booking.hotel;

  const price = booking.price;
  const isPaid =
    booking.isPaid === undefined
      ? undefined
      : booking.isPaid === true
      ? "Paid"
      : "Not-Paid";

  const handleSelectHotel = () => {
    navigate(
      `/hotels/${province.name}/${slug}-${_id}?sort=PRICE_LOW_TO_HIGH&rating=Any`
    );
  };
  return (
    <MainCard
      elevation={2}
      sx={{ overflow: "hidden", position: "relative", cursor: "pointer" }}
      navigateFn={handleSelectHotel}
    >
      {/* TOP-RIGHT Paid Icon */}
      {isPaid === "Paid" && (
        <Statement
          statement="PAID"
          color="success.light"
          textColor="white"
          icon={
            <CheckCircleOutlineIcon
              sx={{ fontSize: 24, color: "success.main" }}
            />
          }
        />
      )}
      {isPaid === "Not-Paid" && (
        <Statement
          statement="UNPAID"
          color="yellow"
          textColor="orange"
          icon={<ReportProblemIcon sx={{ fontSize: 24, color: "orange" }} />}
        />
      )}

      <Box
        display="grid"
        gridTemplateColumns={widthViewPort_650 ? "1fr" : "0.4fr 0.6fr"}
        gridTemplateRows={widthViewPort_650 ? "300px 300px" : "320px"}
      >
        <ImageSilder images={images} />

        <Box sx={{ padding: `${widthViewPort_850 ? "10px" : "16px"}` }}>
          <HotelCardHead
            stars={stars}
            name={name}
            amenities={amenities}
            location={province.name}
            propertyType={propertyType}
          />
          <HotelCardContent
            ratingsAverage={ratingsAverage}
            ratingsQuantity={ratingsQuantity}
            price={price}
          />
        </Box>
      </Box>
    </MainCard>
  );
}

export default MyBookingCard;
