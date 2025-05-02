import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// UI
import searchReducer from "./features/search/searchSlice";
import filterReducer from "./features/filter/filterSlice";
// API
import { hotelApi } from "./services/apiHotelSlice";
import { userApi } from "./services/apiUserSlice";
import { provinceApi } from "./services/apiProvinceSlice";
import { bookingApi } from "./services/apiBookingSlice";
import { favoriteApi } from "./services/apiFavoriteSlice";
import { hotelTypeApi } from "./services/apiHotelTypeSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [provinceApi.reducerPath]: provinceApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [hotelTypeApi.reducerPath]: hotelTypeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hotelApi.middleware)
      .concat(userApi.middleware)
      .concat(provinceApi.middleware)
      .concat(bookingApi.middleware)
      .concat(favoriteApi.middleware)
      .concat(hotelTypeApi.middleware),
});

export default store;

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
