import { Outlet } from "react-router";
import { Fragment, useState, useEffect, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { CartStore, SearchStore, useLoggedInStore } from "../../store";
import { io } from "socket.io-client";
import SearchBar from "../../components/SearchBar";

const currencies = ["INR"];
const navigation = {
  categories: [],
  pages: [],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ShopLayout = () => {
  const { open } = SearchStore();
  let isLoggedin = useLoggedInStore((state) => state.loggedIn);
  let logout = useLoggedInStore((state) => state.logout);
  let { CartCount } = CartStore();
  const dropdownRef = useRef(null);

  const [notifications, SetNotify] = useState([]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  // const socket = io.connect("http://localhost:8000")
  // socket.on("notify",(message)=>{
  //     SetNotify(message)
  //    })

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div>
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </form>
              {isLoggedin ? (
                <>
                  <div className="flex items-center space-x-6">
                    <Link
                      to={"/account"}
                      className="text-sm font-medium text-white hover:text-gray-100"
                    >
                      My Account
                    </Link>
                    <Link
                      onClick={() => logout()}
                      className="text-sm font-medium text-white hover:text-gray-100"
                    >
                      Logout
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-6">
                    <Link
                      to={"/login"}
                      className="text-sm font-medium text-white hover:text-gray-100"
                    >
                      Sign in
                    </Link>
                    <Link
                      to={"/register"}
                      className="text-sm font-medium text-white hover:text-gray-100"
                    >
                      Create an account
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link to={"/"}>
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://d1s2w0upia4e9w.cloudfront.net/images/favicon.ico"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <Link
                        className="ml-2 text-md font-medium text-gray-600 group-hover:text-gray-800"
                        onClick={() => open()}
                      >
                        Search
                      </Link>
                      <Link
                        className="ml-2 text-md font-medium text-gray-600 group-hover:text-gray-800"
                        to={"/auction"}
                      >
                        Auction
                      </Link>
                      <Link className="ml-2 text-md font-medium text-gray-600 group-hover:text-gray-800">
                        About
                      </Link>
                      <Link className="ml-2 text-md font-medium text-gray-600 group-hover:text-gray-800">
                        Contact
                      </Link>
                    </div>
                    <div className="relative">
                      <button
                        className="text-black ml-5 mt-2 focus:outline-none"
                        onClick={toggleDropdown}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                          />
                        </svg>
                      </button>
                      <span className="mb-1">{notifications.length}</span>
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-md">
                          <div className="p-2" ref={dropdownRef}>
                            {notifications.map((notification) => (
                              <div
                                key={notification.id}
                                className="cursor-pointer hover:bg-gray-100 p-2"
                                onClick={() => console.log(notification.id)}
                              >
                                <div className="text-sm font-semibold">
                                  {notification.message}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {notification.date}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flow-root lg:ml-8">
                      <Link
                        className="group -m-2 flex items-center p-2"
                        to={"/cart"}
                      >
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          {CartCount}
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative w-[100vw] h-[100vh]">
        <SearchBar />
        {/* <div className="absolute p-12 z-1"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
};

export default ShopLayout;
