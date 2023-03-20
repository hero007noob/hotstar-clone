import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ParentControl from "./Navbar/ParentControl";

export default function PrivateRoute({ children }) {
  const isLock = useSelector((state) => state.parentReducer.isLocked);
  console.log("private route", isLock);
  return isLock === false ? children : <ParentControl />;
}
