import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function AdminWallet() {
  return (
    <div className=" bg-white h-[89vh] p-6 relative">
      <div className="flex justify-between p-6">
        <div>
          <div role="tablist" className=" h-full tabs tabs-boxed">
            <NavLink
              exact={true}
              role="tab"
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} tab h-full`
              }
              to={"/admin/wallet"}
            >
              NEW
            </NavLink>

            <NavLink
              role="tab"
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} tab h-full`
              }
              to={"/admin/settled"}
            >
              SETTLED
            </NavLink>
          </div>
        </div>
        <button className="py-2 my-3 bg-white"></button>
      </div>
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[80vw]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminWallet;
