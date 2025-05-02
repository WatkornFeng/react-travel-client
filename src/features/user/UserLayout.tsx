import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Footer from "../../components/Footer";

function UserLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Content area */}
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>

        {/* Footer */}

        <Footer />
      </Box>
    </>
  );
}

export default UserLayout;
