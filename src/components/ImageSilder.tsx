import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, IconButton, useTheme } from "@mui/material";
import { IHotelImages } from "../services/apiHotel.type";
interface IProps {
  images: IHotelImages[];
}

function ImageSilder({ images }: IProps) {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImage] = useState(1);
  const fiveImages = images.length > 5 ? images.slice(0, 5) : images;
  const handlePrevImg = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setCurrentImage((index) => index - 1);
  };
  const handleNextImg = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setCurrentImage((index) => index + 1);
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {fiveImages.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image.url}
          sx={{
            width: "100%",
            flexShrink: 0,
            objectFit: "cover",
            transition: "transform 0.5s ease-out",
            transform: `translateX(-${currentImageIndex * 100}%)`,
            "&:hover": {
              transform: `translateX(-${currentImageIndex * 100}%) scale(1.05)`,
              zIndex: 1,
            },
          }}
        />
      ))}
      {currentImageIndex >= 0 && (
        <IconButton
          onClick={handlePrevImg}
          disabled={currentImageIndex === 0}
          sx={{
            zIndex: 2,
            position: "absolute",
            color: "primary.main",
            bgcolor: "white",
            top: "50%",
            transform: "translate(0,-50%)",
            boxShadow: "0 12px 24px rgba(0,0,0,2)",
            left: 0,
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
      )}
      {currentImageIndex <= 4 && (
        <IconButton
          onClick={handleNextImg}
          disabled={currentImageIndex === 4}
          sx={{
            position: "absolute",
            zIndex: 2,
            color: "primary.main",
            bgcolor: "white",
            top: "50%",
            transform: "translate(0,-50%)",
            boxShadow: "0 12px 24px rgba(0,0,0,2)",
            right: 0,
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      )}

      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: 0,
          pb: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: "50%",
          transform: "translate(-50%,0)",
          background: "transparent",
          gap: 1,
        }}
      >
        {fiveImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: "0.8rem",
              width: "0.8rem",
              background: `${
                index === currentImageIndex
                  ? theme.palette.primary.dark
                  : "white"
              }`,
              borderRadius: "50%",
              border: `0.2rem solid ${theme.palette.primary.dark}`,
              boxShadow: "0px 0px 41px 0px rgba(0,0,0,1)",
              transition: "transform 1s",
              transform: `${index === currentImageIndex ? "scale(1.2)" : ""}`,
            }}
          >
            &nbsp;
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ImageSilder;
