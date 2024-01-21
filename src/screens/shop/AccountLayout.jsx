import React from "react";
import { Link, Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div className="flex">
      <div className="bg-gray-50 p-4 h-[80vh] w-1/5">
        <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <Link to={"/account/"}>
            <div>
              <div
                role="button"
                tabindex="0"
                class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-100 hover:bg-opacity-80 focus:bg-blue-100 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              >
                Profile
              </div>
            </div>
          </Link>

          <Link to={"/account/orders"}>
            <div>
              <div
                role="button"
                tabindex="0"
                class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-100 hover:bg-opacity-80 focus:bg-blue-100 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              >
                Orders
              </div>
            </div>
          </Link>

          <Link to={"/account/wallet"}>
            <div>
              <div
                role="button"
                tabindex="0"
                class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-100 hover:bg-opacity-80 focus:bg-blue-100 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              >
                Wallet
              </div>
            </div>
          </Link>
        </nav>
      </div>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
