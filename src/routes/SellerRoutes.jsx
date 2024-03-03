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
import SettledWallet from "../screens/seller/SettledWallet";
import SellerWalletTable from "../screens/seller/SellerWalletTable";
import OrderScreen from "../screens/seller/OrderScreen";
import OrderProcess from "../screens/seller/OrderProcess";
import OrderShipped from "../screens/seller/OrderShipped";
import OrderRejected from "../screens/seller/OrderRejected";
import OrderDelivered from "../screens/seller/OrderDelivered";
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

        {/* <Route path="auction_sold" element={<SoldAuction />} /> */}

        <Route element={<SellerWallet />}>
          <Route path="settled" element={<SettledWallet />} />
          <Route path="wallet" element={<SellerWalletTable />} />
        </Route>

        <Route element={<OrderScreen />}>
          <Route path="orders" element={<SellerOrder />} />
          <Route path="process_order" element={<OrderProcess />} />
          <Route path="shipped_order" element={<OrderShipped />} />
          <Route path="rejected_order" element={<OrderRejected />} />
          <Route path="delivered_order" element={<OrderDelivered />} />
        </Route>
      </Route>
    </Routes>
  );
};
