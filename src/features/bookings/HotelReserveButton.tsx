import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";

import useMatchViewPort from "../../hooks/useMatchViewPort";
import Spinner from "../../components/Spinner";
import {
  IBookingHotelResponse,
  useCreatePaymentMutation,
} from "../../services/apiBookingSlice";

interface IProps {
  hotelId: string;
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
function HotelReserveButton({ hotelId }: IProps) {
  const widthViewPort_615 = useMatchViewPort(615);
  const location = useLocation();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAccessTokenSilently();

      setToken(accessToken);
    };

    fetchToken();
  }, [token, getAccessTokenSilently]);

  const [createPayment, { isLoading }] = useCreatePaymentMutation();

  const handleMakePayment = async () => {
    const stripe = await stripePromise;
    const response = await createPayment({
      hotelId,
      cancelUrl: location.pathname + location.search,
      token: token!,
    });
    const sessionId = (response as { data: IBookingHotelResponse }).data.session
      .id;
    if (stripe) {
      stripe.redirectToCheckout({
        sessionId,
      });
    }
  };
  if (!token) return null;

  return (
    <Button
      onClick={handleMakePayment}
      variant="contained"
      sx={{
        borderRadius: "10px",
        minHeight: "60px",
      }}
      disabled={isLoading}
      endIcon={isLoading ? <Spinner size="small" color="grey" /> : null}
    >
      <Typography
        fontWeight="bold"
        fontSize={widthViewPort_615 ? "0.65rem" : "1rem"}
      >
        Reserve {widthViewPort_615 ? "" : "room"}
      </Typography>
    </Button>
  );
}

export default HotelReserveButton;
