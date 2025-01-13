import React from "react";
import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const MobileIcons = ({ hidden }) => {
  return (
    <div
      className={`z-50 fixed bottom-0 left-0 w-full text-xl bg-white opacity-100 font-merriweather flex items-center justify-between py-3 px-10 sm:hidden ${
        hidden ? "hidden" : ""
      }`}
    >
      <a href="/home" className="flex flex-col items-center">
        <FaHome className="mb-1 text-gray-900" />
        <span className="text-gray-700">Home</span>
      </a>
      <a href="/search" className="flex flex-col items-center">
        <FaSearch className="mb-1 text-gray-900" />
        <span className="text-gray-700">Search</span>
      </a>
      <a href="/cart" className="flex flex-col items-center">
        <FaShoppingCart className="mb-1 text-gray-900" />
        <span className="text-gray-700">Cart</span>
      </a>
      <a href="/profile" className="flex flex-col items-center">
        <FaUser className="mb-1 text-gray-900" />
        <span className="text-gray-700">Profile</span>
      </a>
    </div>
  );
};

export default MobileIcons;
