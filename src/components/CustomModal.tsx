import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  Fade,
  Backdrop,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    topic: string;
    details: string;
  };
  isNavigated: boolean;
}
const CustomModal = ({
  toggled,
  setToggled,
  content: { topic, details },
  isNavigated,
}: IProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = (e: any) => {
    e.stopPropagation();
    if (isNavigated) return navigate(-1);
    setToggled(false);
  };
  return (
    <>
      <Modal
        open={toggled}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 300 } }}
        aria-labelledby="modal-label"
        aria-describedby="modal-description"
      >
        <Fade in={toggled}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isSmallScreen ? "90%" : 460,
              bgcolor: "background.paper",
              borderRadius: 3,
              boxShadow: 24,
              p: isSmallScreen ? 3 : 4,
              pt: isSmallScreen ? 5 : 6,
              outline: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "grey.500",
                "&:hover": { color: "grey.700" },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Title */}
            <Typography
              id="modal-label"
              variant="h6"
              component="h2"
              sx={{ mb: 1.5, fontWeight: 600 }}
            >
              {topic}
            </Typography>

            {/* Description */}
            <Typography
              id="modal-description"
              variant="body2"
              sx={{
                mb: 4,
                color: "text.secondary",
                lineHeight: 1.6,
                fontSize: isSmallScreen ? "0.95rem" : "1rem",
              }}
            >
              {details}
            </Typography>

            {/* OK Button */}
            <Box sx={{ textAlign: "right" }}>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 500,
                  px: 4,
                  py: 1,
                  width: isSmallScreen ? "100%" : "auto",
                }}
              >
                OK
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CustomModal;
