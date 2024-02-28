import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiSettings } from "react-icons/ci";
import { RiHome4Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import AnimatedPage from "../../components/AnimatedPage";
let menu = [
  {
    name: "HOME",
    path: "users",
    icon: <RiHome4Line className="h-full w-full" />,
  },
  {
    name: "CATEGORY",
    path: "category",
    icon: <BiCategory className="h-full w-full" />,
  },
  {
    name: "WALLET",
    path: "wallet",
    icon: <CiWallet className="h-full w-full" />,
  },
  {
    name: "PRODUCTS",
    path: "products",
    icon: <CiShoppingCart className="h-full w-full" />,
  },
  {
    name: "SETTINGS",
    path: "settings",
    icon: <CiSettings className="h-full w-full" />,
  },
];

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 w-full bg-slate-100">
        <Sidebar menu={menu} />
      </div>
      <div className="col-span-8 h-full w-full">
        <ToastContainer />
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </div>
    </div>
  );
};

export default AdminLayout;
