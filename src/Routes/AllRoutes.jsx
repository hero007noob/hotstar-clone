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
import MobileFooter from "../Component/Navbar/MobileFooter";
import { useSelector } from "react-redux";
import PrivateRoute from "../Component/PrivateRoute";

function AllRoutes() {
  const isLock = useSelector((state) => state.parentReducer.isLocked);
  React.useEffect(() => {
    console.log("lock", isLock);
  }, [isLock]);
  const routes = [
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Profile />,
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />,
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
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
          <MobileFooter />
          <Footer />
        </>
      ),
    },
    {
      path: "/genre/:id",
      element: (
        <>
          <Navbar />
          <Filtered />,
          <MobileFooter />
          <Footer />
        </>
      ),
    },
  ];

  return (
    <Routes>
      {routes.map((elem, i) => {
        return (
          <Route
            key={i}
            path={elem.path}
            element={<PrivateRoute>{elem.element}</PrivateRoute>}
          />
        );
      })}
    </Routes>
  );
}

export default AllRoutes;
