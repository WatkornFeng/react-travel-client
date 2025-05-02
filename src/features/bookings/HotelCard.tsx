import { useNavigate, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";

import MainCard from "../../components/MainCard";
import FavoriteButton from "../../components/FavoriteButton";
import ImageSilder from "../../components/ImageSilder";
import HotelCardHead from "./HotelCardHead";
import HotelCardContent from "./HotelCardContent";

import {
  IAmenities,
  IHotelImages,
  IPropertyType,
} from "../../services/apiHotel.type";

interface Props {
  id: string;
  name: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  stars: number;
  price: number;
  amenities: IAmenities[];
  province: string;
  slug: string;
  images: IHotelImages[];
  propertyType: IPropertyType;
}

function HotelCard({
  name,
  stars,
  ratingsAverage,
  price,
  amenities,
  slug,
  province,
  ratingsQuantity,
  id,
  images,
  propertyType,
}: Props) {
  const navigate = useNavigate();
  const widthViewPort_650 = useMatchViewPort(650);
  const widthViewPort_850 = useMatchViewPort(850);
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const handleSelectHotel = () => {
    navigate(`/hotels/${province}/${slug}-${id}?${queryString}`);
  };
  return (
    <MainCard
      elevation={2}
      sx={{ overflow: "hidden", position: "relative", cursor: "pointer" }}
      navigateFn={handleSelectHotel}
    >
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
            location={province}
            propertyType={propertyType}
          />
          <HotelCardContent
            ratingsAverage={ratingsAverage}
            ratingsQuantity={ratingsQuantity}
            price={price}
          />
        </Box>
      </Box>
      <FavoriteButton position="absolute" hotelId={id} />
    </MainCard>
  );
}

export default HotelCard;
