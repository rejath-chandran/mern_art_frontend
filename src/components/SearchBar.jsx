import { useEffect } from "react";
import { SearchStore } from "../store";
import { useRef } from "react";
import { useNavigate } from "react-router";
// import { motion } from "framer-motion"

function SearchBar() {
  const nav = useNavigate();
  const { visible, close } = SearchStore();
  const dropdownRef = useRef();
  const SearchRef = useRef("");
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const FinalSubmit = (e) => {
    e.preventDefault();

    nav(`/category/${SearchRef.current.value}`);
    SearchRef.current.value = "";
    close();
  };
  return (
    <div
      className={`${visible ? "" : "hidden"} absolute bg-white opacity-95 inset-0 z-40`}
    >
      <div className="flex justify-center ">
        <div class="mt-32 opacity-90 relative p-4 w-full max-w-2xl max-h-full">
          <div ref={dropdownRef} class="relative bg-white rounded-lg shadow ">
            <form onSubmit={FinalSubmit}>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  ref={SearchRef}
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
