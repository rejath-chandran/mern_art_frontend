import { Route, Routes } from "react-router-dom";

import SellerLayout from "../screens/seller/SellerLayout";
import SellerProduct from "../screens/seller/SellerProduct";
import SellerAuction from "../screens/seller/SellerAuction";
import SellerWallet from "../screens/seller/SellerWallet";
import SellerOrder from "../screens/seller/SellerOrder";
import { Navigate } from "react-router-dom";
export const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/seller" />} />
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<SellerProduct />} />
        <Route path="auction" element={<SellerAuction />} />
        <Route path="wallet" element={<SellerWallet />} />
        <Route path="orders" element={<SellerOrder />} />
      </Route>
    </Routes>
  );
};
