import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import Login from "../pages/login/Login";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  // const { isLogin } = useContext(authContext);
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;

  // return <Route {...rest}>{isLogin ? children : <Login />}</Route>;
};

export default PrivateRoute;
