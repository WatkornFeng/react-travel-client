import { User } from "@auth0/auth0-react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROOT_ROUTE_API, ROUTE_USERS } from "./constant";
interface IAddUser {
  status: string;
}

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_ROUTE_API + ROUTE_USERS,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation<IAddUser, { user: User; token: string }>({
      query: ({ user, token }) => ({
        url: "/signup",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          locale: user.locale,
        }),
      }),
    }),
  }),
});

export const { useAddUserMutation } = userApi;
