import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROOT_ROUTE_API, ROUTE_BOOKINGS } from "./constant";
import {
  IAmenities,
  IHotelImages,
  IPropertyType,
  IProvince,
} from "./apiHotel.type";

export interface IBookingHotelResponse {
  session: {
    id: string;
  };
  status: string;
}
export interface IBookingHotelParameters {
  hotelId: string;
  token: string;
  cancelUrl: string;
}
export type IGetMyBookingsParameter = string;
export interface IGetMyBookingsResponse {
  data: {
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
    isPaid: boolean;
    createAt: string;
  }[];
  status: string;
}

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_BOOKINGS,
  }),
  endpoints: (builder) => ({
    createPayment: builder.mutation<
      IBookingHotelResponse,
      IBookingHotelParameters
    >({
      query: ({ hotelId, cancelUrl, token }) => ({
        url: `/checkout-session/${hotelId}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cancelUrl }),
      }),
    }),
    getMyBookings: builder.query<
      IGetMyBookingsResponse,
      IGetMyBookingsParameter
    >({
      query: (token) => ({
        url: "/myBooking",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useCreatePaymentMutation, useGetMyBookingsQuery } = bookingApi;
