import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const PrivateRoute = ({ path, ...props }) => {
  const { isLogin } = useContext(authContext);

  return isLogin ? <Route path={path} {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
