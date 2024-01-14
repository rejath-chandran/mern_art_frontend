import React from "react";

const Header = ({ name, openModal }) => {
  return (
    <div className="flex justify-end p-6">
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
