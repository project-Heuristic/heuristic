import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/userAuthContext";

export default function ProtectedRoute({ children }) {
  let {user} = useUserAuth();
  if (user) {

    // return <Navigate to="/" />;
    return children;
  }
}
