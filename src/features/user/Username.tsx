import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

const settingsMenu = ["My Bookings", "My Favorites"];
function Username() {
  const { user } = useAuth0();

  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavigate = (menu: string) => {
    const slugMenu = menu.toLowerCase().replace(/\s+/g, "-");
    navigate(`/users/${slugMenu}`);
    setAnchorElUser(null);
  };

  return (
    <>
      {user && (
        <>
          <Tooltip title="user account">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={"user avatar"} src={user?.picture} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-user"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settingsMenu.map((menu) => (
              <MenuItem key={menu} onClick={() => handleNavigate(menu)}>
                <Typography textAlign="center">{menu}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography color="primary" fontWeight="bold">
            {user.name}
          </Typography>
        </>
      )}
    </>
  );
}

export default Username;
