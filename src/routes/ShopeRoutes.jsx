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
          <Route path="category/:value" element={<Category />} />
          <Route path="item/:id" element={<Products />} />
          <Route path="auction" element={<Auction />} />
          <Route path="auction/:id" element={<AuctionItem />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<AccountLayout />}>
            <Route index element={<UserProfile />} />
            <Route path="wallet" element={<UserWallet />} />
            <Route path="orders" element={<UserWallet />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default ShopeRoutes;
