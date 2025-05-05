import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ROOT_ROUTE_API, ROUTE_PROVINCES } from "./constant";

export interface IGetProvincesResponse {
  status: string;
  provinces: { name: string }[];
}
export interface IGetProvinceResponse {
  status: string;
  province: Province;
  countHotel: number;
}
export interface IGetSixProvincesResponse {
  status: string;
  provinces: {
    picture: {
      url: string;
    };
    _id: string;
    name: string;
  }[];
}
export interface Province {
  pictureCover: {
    url: string;
  };
  _id: string;
  name: string;
}

export const provinceApi = createApi({
  reducerPath: "provinceApi",

  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_PROVINCES,
  }),
  endpoints: (builder) => ({
    getProvince: builder.query<IGetProvinceResponse, { provinceName: string }>({
      query: ({ provinceName }) => `/province/${provinceName}`,
    }),
    getProvinces: builder.query<IGetProvincesResponse, void>({
      query: () => "",
    }),
    getSixProvinces: builder.query<IGetSixProvincesResponse, void>({
      query: () => "/sixProvinces",
    }),
  }),
});

export const {
  useGetProvincesQuery,
  useGetSixProvincesQuery,
  useGetProvinceQuery,
} = provinceApi;
