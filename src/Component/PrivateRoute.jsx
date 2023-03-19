import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.loginReducer.Auth);
  console.log("private route", isAuth);
  return isAuth === true ? children : <Navigate to="/login" />;
}
