import React from "react";

import { NavLink } from "react-router-dom";
const Header = ({ name, openModal, type, children }) => {
  return (
    <div className="flex justify-between p-6">
      {type == "auction" ? (
        <>
          <div>
            <div role="tablist" className=" h-full tabs tabs-boxed">
              <NavLink
                exact={true}
                role="tab"
                className={({ isActive }) =>
                  `${isActive ? "bg-black text-white" : ""} tab h-full`
                }
                to={"/seller/auction"}
              >
                NEW
              </NavLink>

              <NavLink
                role="tab"
                exact={true}
                className={({ isActive }) =>
                  `${isActive ? "bg-black text-white" : ""} tab h-full`
                }
                to={"/seller/sold_auction"}
              >
                SOLD
              </NavLink>
            </div>
          </div>
          {children}
        </>
      ) : (
        <>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => openModal(true)}
          >
            {name}
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
