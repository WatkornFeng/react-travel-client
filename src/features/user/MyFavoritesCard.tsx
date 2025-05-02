import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMatchViewPort from "../../hooks/useMatchViewPort";

import FavoriteButton from "../../components/FavoriteButton";
import ImageSilder from "../../components/ImageSilder";
import MainCard from "../../components/MainCard";
import HotelCardContent from "../bookings/HotelCardContent";
import HotelCardHead from "../bookings/HotelCardHead";

import {
  IAmenities,
  IHotelImages,
  IPropertyType,
  IProvince,
} from "../../services/apiHotel.type";
interface Props {
  _id: string;
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
    price: number;
  };
}
export default function MyFavoritesCard({ favorite }: { favorite: Props }) {
  const widthViewPort_650 = useMatchViewPort(650);
  const widthViewPort_850 = useMatchViewPort(850);
  const navigate = useNavigate();
  const {
    price,
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
  } = favorite.hotel;

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
      <FavoriteButton position="absolute" hotelId={_id} />
    </MainCard>
  );
}
