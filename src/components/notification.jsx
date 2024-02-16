import React, { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";

function Notification({ toggleDropdown, isDropdownOpen, dropdownRef }) {
  const [notifications, SetNotify] = useState([]);

  useEffect(() => {
    const socket = io.connect("http://localhost:8000");

    socket.on("connect", (message) => {
      console.log("notify", message);
    });

    return function () {
      socket.disconnect();
    };
  }, []);

  return (
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
        <div className="absolute z-50 right-0 mt-2 w-64 h-64  border rounded-md shadow-md">
          <div className="p-2 h-full w-full  bg-fuchsia-200" ref={dropdownRef}>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="cursor-pointer  p-2"
                onClick={() => console.log(notification.id)}
              >
                {console.log("hey", notification)}
                <div className="text-sm text-black font-semibold">
                  {notification.message}
                </div>
                <div className="text-xs text-gray-500">{notification.date}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
