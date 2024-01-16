import React from "react";
import { Link } from "react-router-dom";
import { useLoggedInStore } from "../store";

const Sidebar = ({ menu, name }) => {
  const Logout = useLoggedInStore((state) => state.logout);

  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-4">
      <div className="text-2xl font-bold mb-4">
        {name ? name : "Admin"} Dashboard
      </div>
      <ul>
        {menu.map((e) => (
          <li className="mb-2 mt-6 ">
            <Link className="hover:text-gray-300 " to={e.path}>
              {e.name}
            </Link>
          </li>
        ))}

        <li className="mb-2 mt-6 ">
          <button
            className="hover:text-red-400 text-red-600"
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
