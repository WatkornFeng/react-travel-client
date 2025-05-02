import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LoggedOutRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const returnTo = params.get("returnTo") || "/";

    navigate(returnTo, { replace: true });
  }, [location.search, navigate]);

  return null;
}

export default LoggedOutRedirect;
