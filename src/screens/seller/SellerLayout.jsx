import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RiAuctionLine } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import AnimatedPage from "../../components/AnimatedPage";

let menu = [
  {
    name: "PRODUCTS",
    path: "/seller",
    icon: <CiShoppingCart className="h-full w-full" />,
  },
  {
    name: "AUCTION",
    path: "/seller/auction",
    icon: <RiAuctionLine className="h-full w-full" />,
  },
  {
    name: "WALLET",
    path: "/seller/wallet",
    icon: <CiWallet className="h-full w-full" />,
  },
  {
    name: "ORDERS",
    path: "/seller/orders",
    icon: <CiBoxList className="h-full w-full" />,
  },
];

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar menu={menu} name={"Seller"} />
      <div className="grow">
        <ToastContainer />
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </div>
    </div>
  );
};

export default AdminLayout;
