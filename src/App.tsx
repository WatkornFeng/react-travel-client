import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ThankYouPage from "./pages/Checkout";
import HotelDetail from "./pages/HotelDetail";
import HotelSearch from "./pages/HotelSearch";
import MyFavorites from "./pages/MyFavorites";
import Mybooking from "./pages/Mybooking";

import HotelLayout from "./components/HotelLayout";
import UserLayout from "./features/user/UserLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthCallbackHandler from "./features/user/AuthCallbackHandler";
import LoggedOutRedirect from "./features/user/LoggedOutRedirect ";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth-callback" element={<AuthCallbackHandler />} />
      <Route path="/logout-callback" element={<LoggedOutRedirect />} />

      <Route
        path="checkout-success"
        element={
          <ProtectedRoute>
            <ThankYouPage />
          </ProtectedRoute>
        }
      />

      <Route path="hotels" element={<HotelLayout />}>
        <Route index element={<Navigate replace to="/" />} />
        <Route path=":placeParam" element={<HotelSearch />} />
        <Route path=":placeParam/:nameHotel" element={<HotelDetail />} />
      </Route>
      <Route
        path="users"
        element={
          <ProtectedRoute>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route path="my-bookings" element={<Mybooking />} />
        <Route path="my-favorites" element={<MyFavorites />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
