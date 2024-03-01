import { Route, Routes } from "react-router-dom";
import AdminLayout from "../screens/admin/AdminLayout";
import AdminCategory from "../screens/admin/AdminCategory";
import AdminProduct from "../screens/admin/AdminProduct";
import AdminSettings from "../screens/admin/AdminSettings";
import { Navigate } from "react-router-dom";
import AdmInDashBoard from "../screens/admin/AdmInDashBoard";
import AdminWallet from "../screens/admin/AdminWallet";
import NewWalletTable from "../screens/admin/NewWalletTable";
import SettledWalletTable from "../screens/admin/SettledWalletTable";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="category" element={<AdminCategory />} />
        <Route path="products" element={<AdminProduct />} />
        <Route path="settings" element={<AdminSettings />} />

        <Route  element={<AdminWallet />}>
             <Route path="wallet" element={<NewWalletTable />} />
             <Route path="settled" element={<SettledWalletTable/>} />
        </Route>

        <Route index element={<AdmInDashBoard />} />
      </Route>
    </Routes>
  );
};
