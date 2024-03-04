import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopLayout from "../screens/shop/ShopLayout";
import Home from "../screens/shop/Home";
import Category from "../screens/shop/Category";
import Login from "../screens/shop/Login";
import AdminLogin from "../screens/admin/AdminLogin";
import Products from "../screens/shop/Products";
import Cart from "../screens/shop/Cart";
import AccountLayout from "../screens/shop/AccountLayout";
import UserWallet from "../screens/shop/UserWallet";
import UserProfile from "../screens/shop/UserProfile";
import Register from "../screens/shop/Register";
import { ToastContainer } from "react-toastify";
import SellerLogin from "../screens/seller/SellerLogin";
import Auction from "../screens/shop/Auction";
import AuctionItem from "../screens/shop/AuctionItem";
import { Navigate } from "react-router-dom";
import Checkout from "../screens/shop/Checkout";
import Order from "../screens/shop/Order";
import ArtistView from "../screens/shop/ArtistView";
import AuthChecker from "../components/AuthChecker";
import AboutUs from "../screens/shop/AboutUs";
import ContactUs from "../screens/shop/ContactUs";
import AnimatedPage from "../components/AnimatedPage";
import SearchPage from "../screens/shop/SearchPage";
const ShopeRoutes = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/admin/*" element={<AdminLogin />} />
        <Route path="/seller/*" element={<SellerLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<ShopLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="category/:value"
            element={
              <AnimatedPage>
                <Category />
              </AnimatedPage>
            }
          />
          <Route
            path="search/:value"
            element={
              <AnimatedPage>
                <SearchPage/>
              </AnimatedPage>
            }
          />
          <Route
            path="item/:id"
            element={
              <AnimatedPage>
                <Products />
              </AnimatedPage>
            }
          />
          <Route
            path="artist/:id"
            element={
              <AnimatedPage>
                {" "}
                <ArtistView />
              </AnimatedPage>
            }
          />
          <Route path="auction" element={<Auction />} />
          <Route path="auction/:id" element={<AuctionItem />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <AuthChecker>
                <Checkout />
              </AuthChecker>
            }
          />
          <Route
            path="account"
            element={
              <AuthChecker>
                <AccountLayout />
              </AuthChecker>
            }
          >
            <Route index element={<UserProfile />} />
            <Route path="wallet" element={<UserWallet />} />
            <Route path="orders" element={<Order />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default ShopeRoutes;
