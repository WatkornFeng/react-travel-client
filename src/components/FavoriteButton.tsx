import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  useCreateFavoritesMutation,
  useDeleteFavoriteMutation,
  useGetMyFavoriteQuery,
} from "../services/apiFavoriteSlice";
import CustomModal from "./CustomModal";

interface IProps {
  position: "absolute" | "relative";
  hotelId: string;
}

function FavoriteButton({ position, hotelId }: IProps) {
  const [toggledModal, setToggledModal] = useState(false);

  const { user } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);
  const [createFavorites, { isLoading: creating }] =
    useCreateFavoritesMutation();
  const [deleteFavorite, { isLoading: deleting }] = useDeleteFavoriteMutation();

  const { data: myFavorites } = useGetMyFavoriteQuery(token!, {
    skip: !token, // <-- skip until token ready
  });

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAccessTokenSilently();

      setToken(accessToken);
    };

    fetchToken();
  }, [getAccessTokenSilently]);

  const isMutating = creating || deleting;

  const isFavorite =
    myFavorites && myFavorites.data.find((item) => item.hotel._id === hotelId);

  const handleFavorite = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (!user || !token) {
      setToggledModal(true);
      return;
    }

    if (!isFavorite) {
      await createFavorites({ hotelId, token }).unwrap();
    } else {
      await deleteFavorite({ favoriteId: isFavorite._id, token }).unwrap();
    }
  };
  return (
    <>
      <CustomModal
        toggled={toggledModal}
        setToggled={setToggledModal}
        content={{
          topic: "You are not allowed to do this action.",
          details: "Please login.",
        }}
        isNavigated={false}
      />

      <IconButton
        onClick={handleFavorite}
        disabled={isMutating}
        sx={{
          bgcolor: "white",
          zIndex: 2,
          position: position === "absolute" ? "absolute" : "relative",
          top: position === "absolute" ? 15 : "",
          left: position === "absolute" ? 15 : "",

          color: "primary.main",
          "&:hover": {
            color: "red",
            backgroundColor: "white",
          },
        }}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "red", cursor: "pointer" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "red", cursor: "pointer" }} />
        )}
      </IconButton>
    </>
  );
}

export default FavoriteButton;
