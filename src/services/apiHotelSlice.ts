import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IAddImageHotelResponse,
  IGetHotelResponse,
  IGetHotels,
  IGetHotelsResponse,
} from "./apiHotel.type";
import { ROOT_ROUTE_API, ROUTE_HOTELS } from "./constant";

export const hotelApi = createApi({
  reducerPath: "hotelApi",

  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_HOTELS,
  }),
  endpoints: (builder) => ({
    getHotels: builder.query<IGetHotelsResponse, IGetHotels>({
      query: ({ queryString, placeParam }) => `${placeParam}?${queryString}`,
    }),
    getHotelById: builder.query<
      IGetHotelResponse,
      { mongoID: string; placeParam: string }
    >({
      query: ({ mongoID, placeParam }) => `/${placeParam}/${mongoID}`,
    }),

    addImageHotel: builder.mutation<IAddImageHotelResponse, FormData>({
      query: (file) => ({
        url: "/upload-image",
        method: "POST",
        body: file,
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelByIdQuery,
  useAddImageHotelMutation,
} = hotelApi;
