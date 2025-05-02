export interface IHotelImages {
  url: string;
}
export interface IProvince {
  name: string;
}
export interface IAmenities {
  name: string;
  svg: string;
}
interface IHotels {
  _id: string;
  name: string;
  price: number;
  stars: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  amenities: IAmenities[];
  province: IProvince;
  slug: string;
  images: IHotelImages[];
  propertyType: IPropertyType;
}

export interface IQueries {
  adult: number;
  child: number;
  room: number;
  startDate: string;
  endDate: string;
  rating: string;
  sort: string;
  stars: number[];
  types: string[];
}
export interface IGetHotels {
  queryString: string;
  placeParam: string;
}
export interface IGetHotelsResponse {
  status: string;
  data: {
    hotels: IHotels[];
  };
  length: number;
}

export interface IOwnerProperty {
  locale: string;
  name: string;
}
export interface IPropertyType {
  svg: string;
  name: string;
}
export interface IReview {
  svg: string;
  comment: string;
  rating: number;
  createdAt: Date;
  user: {
    name: string;
    locale: string | undefined;
  };
}
export interface ILocation {
  coordinates: number[];
}
export type IGetHotelParameter = string;
export interface IHotel {
  _id: string;
  amenities: IAmenities[];
  bedsQuantity: number;
  guestsQuantity: number;
  description: string;
  images: IHotelImages[];
  location: ILocation;
  name: string;
  ownerProperty: IOwnerProperty;
  price: number;
  propertyType: IPropertyType;
  ratingsAverage: number;
  ratingsQuantity: number;
  reviews: IReview[];
  stars: number;
}
export interface IGetHotelResponse {
  status: string;
  data: {
    hotel: IHotel;
  };
}

export interface IAddImageHotelResponse {
  status: string;
}
