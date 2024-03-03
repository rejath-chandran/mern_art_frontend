import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
const OrderScreen = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-rows-12">
        <div className="row-span-1 flex justify-center items-center">
          <div>
            <NavLink
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} btn btn-default mx-1`
              }
              to={"/seller/orders"}
            >
              NEW
            </NavLink>

            <NavLink
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} btn btn-default mx-1`
              }
              to={"/seller/process_order"}
            >
              PROCESSING
            </NavLink>
            <NavLink
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} btn btn-default mx-1`
              }
              to={"/seller/shipped_order"}
            >
              SHIPPED
            </NavLink>
            <NavLink
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} btn btn-default mx-1`
              }
              to={"/seller/rejected_order"}
            >
              REJECTED
            </NavLink>
            <NavLink
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} btn btn-default mx-1`
              }
              to={"/seller/delivered_order"}
            >
              DELIVERED
            </NavLink>
          </div>
        </div>
        <div className="row-span-11 h-[90vh] bg-slate-300 overflow-auto mx-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
