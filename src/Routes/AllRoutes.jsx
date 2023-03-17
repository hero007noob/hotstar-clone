import React from "react";
import Language from "../Component/Navbar/Language";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";

function AllRoutes() {
  const routes = [
    {
      path: "/language",
      element: <Language />,
    },
    {
      path: "/",
      element: <Home />,
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
