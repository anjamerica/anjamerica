import React from "react";
import { useProtectRouteAuth } from "../../hooks/useRequireAuth";
import Loader from "./Loader";

function AuthLayout({ children }) {
  let { isAuthenticated } = useProtectRouteAuth();

  if (isAuthenticated === null) {
    return <Loader />;
  }

  return (
    <>{children}</>
  );
}

export default AuthLayout;
