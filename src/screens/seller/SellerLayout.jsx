import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let menu = [
  { name: "PRODUCTS", path: "/seller" },
  { name: "AUCTION", path: "/seller/auction" },
  { name: "WALLET", path: "/seller/wallet" },
  { name: "ORDERS", path: "/seller/orders" },
];

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar menu={menu} name={'Seller'}/>
      <div className="grow">
        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
