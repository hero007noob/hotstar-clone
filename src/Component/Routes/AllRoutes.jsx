import React from "react";
import Language from "../Navbar/Language";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  const routes = [
    {
      path: "language",
      element: <Language />,
    },
  ];

  return (
    <Routes>
      {routes.map((elem, i) => {
        return <Route key={i} path={elem.path} element={elem.element} />;
      })}
    </Routes>
  );
}

export default AllRoutes;
