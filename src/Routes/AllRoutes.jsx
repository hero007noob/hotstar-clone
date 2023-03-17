import React from "react";
import Language from "../Component/Navbar/Language";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import ProductDetail from "../Component/ProductDetail";
import Genre from "../Component/Genre";
import Filtered from "../Component/Filtered";
import Play from "../Component/Play";
import Navbar from "../Component/Navbar/Navbar";

function AllRoutes() {
  const routes = [
    {
      path: "/language",
      element: (
        <>
          <Navbar />
          <Language />,
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />,
        </>
      ),
    },
    {
      path: "/watch/:type/:id",
      element: (
        <>
          <Navbar />
          <ProductDetail />,
        </>
      ),
    },
    {
      path: "/genre",
      element: (
        <>
          <Navbar />
          <Genre />,
        </>
      ),
    },
    {
      path: "/filtered/:id",
      element: (
        <>
          <Navbar />
          <Filtered />,
        </>
      ),
    },
    {
      path: "/play/:type/:id",
      element: (
        <>
          <Navbar />
          <Play />,
        </>
      ),
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
