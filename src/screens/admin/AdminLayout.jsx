import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let menu = [
  { name: "USERS", path: "users" },
  { name: "CATEGORY", path: "category" },
  { name: "WALLET", path: "users" },
  { name: "PRODUCTS", path: "users" },
];

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar menu={menu} />
      <div className="grow">
        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
