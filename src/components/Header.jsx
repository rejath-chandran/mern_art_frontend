import React from "react";
import { Link } from "react-router-dom";
const Header = ({ name, openModal, type }) => {
  return (
    <div className="flex justify-between p-6">
      {type == "auction" ? (
        <>
          <div>
            <Link className=" bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              NEW
            </Link>
            <Link className="ml-4 bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sold
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}

      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => openModal(true)}
      >
        {name}
      </button>
    </div>
  );
};

export default Header;
