import { Route, Routes } from "react-router-dom";
import AdminLayout from "../screens/admin/AdminLayout";
import AdminCategory from "../screens/admin/AdminCategory";
import AdminProduct from "../screens/admin/AdminProduct";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="category" element={<AdminCategory />} />
        <Route path="products" element={<AdminProduct />} />
        <Route index element={<AdminCategory />} />
      </Route>
    </Routes>
  );
};
