import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRoute = () => {
  const { user } = useAuth0();// determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
