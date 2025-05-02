import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ROOT_ROUTE_API, ROUTE_FAVORITES } from "./constant";
import {
  IAmenities,
  IHotelImages,
  ILocation,
  IPropertyType,
  IProvince,
} from "./apiHotel.type";

export interface IGetFavoritesResponse {
  status: string;
  data: Favorite[];
}
export type IGetMyFavoritesParameter = string;

export interface Favorite {
  _id: string;
  hotel: {
    amenities: IAmenities[];
    images: IHotelImages[];
    location: ILocation;
    name: string;
    price: number;
    propertyType: IPropertyType;
    province: IProvince;
    ratingsAverage: number;
    ratingsQuantity: number;
    slug: string;
    stars: number;
    _id: string;
  };
}

export interface ICreateFavoriteResponse {
  status: string;
}
export interface ICreateFavoriteParameter {
  hotelId: string;
  token: string;
}
export interface IDeleteFavoriteResponse {
  status: string;
}
export interface IDeleteFavoriteParameter {
  favoriteId: string;
  token: string;
}

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  tagTypes: ["Favorite"],
  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_FAVORITES,
  }),
  endpoints: (builder) => ({
    getMyFavorite: builder.query<
      IGetFavoritesResponse,
      IGetMyFavoritesParameter
    >({
      query: (token) => ({
        url: "",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Favorite"],
    }),
    createFavorites: builder.mutation<
      ICreateFavoriteResponse,
      ICreateFavoriteParameter
    >({
      query: ({ hotelId, token }) => ({
        url: "",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ hotelId }),
      }),
      invalidatesTags: ["Favorite"],
    }),
    deleteFavorite: builder.mutation<
      IDeleteFavoriteResponse,
      IDeleteFavoriteParameter
    >({
      query: ({ favoriteId, token }) => ({
        url: "",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ favoriteId }),
      }),
      invalidatesTags: ["Favorite"],
    }),
  }),
});

export const {
  useGetMyFavoriteQuery,
  useCreateFavoritesMutation,
  useDeleteFavoriteMutation,
} = favoriteApi;
