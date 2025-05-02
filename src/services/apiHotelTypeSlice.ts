import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ROOT_ROUTE_API, ROUTE_HOTEL_TYPE } from "./constant";

export interface IGetHotelTypesResponse {
  status: string;
  types: ITypes[];
  results: number;
}

export interface ITypes {
  _id: string;
  name: string;
}

export const hotelTypeApi = createApi({
  reducerPath: "hotelTypeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_HOTEL_TYPE,
  }),
  endpoints: (builder) => ({
    getHotelTypes: builder.query<IGetHotelTypesResponse, void>({
      query: () => "",
    }),
  }),
});

export const { useGetHotelTypesQuery } = hotelTypeApi;
