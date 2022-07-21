import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProtectRouteAuth } from "../../hooks/useRequireAuth";
import Loader from "./Loader";
import Home from "../../components/admin/Home";

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
