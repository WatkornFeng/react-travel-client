import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function AuthButtons() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return null;

  return (
    <>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
    </>
  );
}
