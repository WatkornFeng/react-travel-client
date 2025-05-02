import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";

function HotelLayout() {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
}

export default HotelLayout;
