import React from "react";
import { Link } from "react-router-dom";
import { useLoggedInStore } from "../store";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ menu, name }) => {
  const Logout = useLoggedInStore((state) => state.logout);

  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-4">
      <div className="text-2xl font-bold mb-4">
        {name ? name : "Admin"} Dashboard
      </div>
      <ul>
        {menu.map((e) => (
          <li className="mb-2 mt-6 grid grid-cols-12 gap-2">
            <div className="col-span-2">{e.icon}</div>
            <Link
              className="text-xl hover:text-gray-300  col-span-8 flex items-center justify-start"
              to={e.path}
            >
              {e.name}
            </Link>
          </li>
        ))}

        <li className="mb-2 mt-6 grid grid-cols-12 ">
          <CiLogout className="h-full w-full col-span-2" />
          <button
            className="hover:text-red-400 text-red-600 col-span-5"
            onClick={() => {
              Logout();
            }}
          >
            LOGOUT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
