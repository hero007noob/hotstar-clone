import React from "react";
import Language from "../Component/Navbar/Language";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import ProductDetail from "../Component/ProductDetail";
import Genre from "../Component/Genre";
import Filtered from "../Component/Filtered";
import Play from "../Component/Play";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Login from "../Component/Login";
import Paymentpage from "../Component/Paymentpage";
import CardDetails from "../Component/CardDetails";
import WishList from "../Component/WishList";
import RegionalLanguage from "../Component/Navbar/RegionalLanguage";
import Channel from "../Component/Navbar/Channel";
import Profile from "../Component/Profile";
import AccountSetting from "../Component/AccountSetting";
import SetPassword from "../Component/SetPassword";

function AllRoutes() {
  const routes = [
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Profile />,
          <Footer />
        </>
      ),
    },
    {
      path: "/language",
      element: (
        <>
          <Navbar />
          <Language />,
          <Footer />
        </>
      ),
    },
    {
      path: "/language/lang/:ln",
      element: (
        <>
          <Navbar />
          <RegionalLanguage />,
          <Footer />
        </>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <>
          <Navbar />
          <WishList />,
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />,
          <Footer />
        </>
      ),
    },
    {
      path: "/payment",
      element: (
        <>
          <Navbar />
          <Paymentpage />,
          <Footer />
        </>
      ),
    },
    {
      path: "/card",
      element: (
        <>
          <Navbar />
          <CardDetails />,
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />,
          <Footer />
        </>
      ),
    },
    {
      path: "/watch/:type/:id",
      element: (
        <>
          <Navbar />
          <ProductDetail />,
          <Footer />
        </>
      ),
    },
    {
      path: "/genre",
      element: (
        <>
          <Navbar />
          <Genre />,
          <Footer />
        </>
      ),
    },
    {
      path: "/channels",
      element: (
        <>
          <Navbar />
          <Channel />
          <Footer />
        </>
      ),
    },
    {
      path: "/account-settings",
      element: (
        <>
          <AccountSetting />
        </>
      ),
    },
    {
      path: "/account-settings/set-password",
      element: (
        <>
          <SetPassword />
        </>
      ),
    },
    {
      path: "/filtered/:id",
      element: (
        <>
          <Navbar />
          <Filtered />,
          <Footer />
        </>
      ),
    },
    {
      path: "/play/:type/:id",
      element: (
        <>
          <Navbar />
          <Play />,
          <Footer />
        </>
      ),
    },
    {
      path: "/genre/:id",
      element: <Filtered />,
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
