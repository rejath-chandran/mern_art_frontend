import { Route, Routes } from "react-router-dom";
import AdminLayout from "../screens/admin/AdminLayout";
import AdminCategory from "../screens/admin/AdminCategory";
import AdminProduct from "../screens/admin/AdminProduct";
import AdminSettings from "../screens/admin/AdminSettings";
import { Navigate } from "react-router-dom";
import AdmInDashBoard from "../screens/admin/AdmInDashBoard";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="category" element={<AdminCategory />} />
        <Route path="products" element={<AdminProduct />} />
        <Route path="settings" element={<AdminSettings />} />
        {/* <Route index element={<AdminCategory />} /> */}
        <Route index element={<AdmInDashBoard />} />
      </Route>
    </Routes>
  );
};
