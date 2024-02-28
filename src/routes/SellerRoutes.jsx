import { Route, Routes } from "react-router-dom";

import SellerLayout from "../screens/seller/SellerLayout";
import SellerProduct from "../screens/seller/SellerProduct";
import SellerAuction from "../screens/seller/SellerAuction";
import SellerWallet from "../screens/seller/SellerWallet";
import SellerOrder from "../screens/seller/SellerOrder";
import SoldAuction from "../screens/seller/SoldAuction";
import { Navigate } from "react-router-dom";
import AuctionTable from "../components/AuctionTable";
import AuthChecker from "../components/AuthChecker";
export const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/seller" />} />
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<SellerProduct />} />

        <Route element={<SellerAuction />}>
          <Route path="auction" element={<AuctionTable />} />
          <Route path="sold_auction" element={<SoldAuction />} />
        </Route>

        <Route path="auction_sold" element={<SoldAuction />} />
        <Route path="wallet" element={<SellerWallet />} />
        <Route path="orders" element={<SellerOrder />} />
      </Route>
    </Routes>
  );
};
