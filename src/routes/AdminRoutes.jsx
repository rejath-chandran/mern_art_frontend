import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AdminLayout = lazy(() => import("../screens/admin/AdminLayout"));
const AdminCategory = lazy(() => import("../screens/admin/AdminCategory"));
const AdminProduct = lazy(() => import("../screens/admin/AdminProduct"));

import { Navigate } from "react-router-dom";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="category" element={<AdminCategory />} />
        <Route path="products" element={<AdminProduct />} />
        <Route index element={<AdminCategory />} />
      </Route>
    </Routes>
  );
};
