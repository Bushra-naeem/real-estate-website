import React from "react";
import HeroBanner from "../assets/images/hero-banner.png";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:items-center font-merriweather bg-slate-50 py-20 md:py-36 gap-10 mb-12 pl-8 md:pl-12 lg:pl-28 lg:pr-14 pt-40"
      id="home"
    >
      <div className="lg:w-1/2 md:pl-4">
        <p className="text-base md:text-xl font-semibold mb-5 flex">
          <span className="mr-1 mt-1 text-red-500">
            <FaHome />
          </span>
          <span>Real Estate Agency</span>
        </p>

        <h2 className="font-bold text-5xl md:text-6xl xl:text-7xl mb-5 sm:mb-4">
          Find Your Dream
          <span className="block">House By Us</span>
        </h2>

        <p className="text-sm md:text-sm lg:text-base text-slate-500 h-12 border-l border-gray-500 mb-4 md:mb-6 pl-4">
          <span>Lorem ipsum dolor sit amet, elit sed</span>
          <span className="block">do eiusmod tempor incididunt ut labore.</span>
        </p>

        <button className="text-white bg-red-400 border-2 border-red-400 hover:bg-white hover:text-black hover:border-white py-2 px-3 md:py-4 md:px-10 text-base lg:text-lg">
          Make An Enquiry
        </button>
      </div>
      <div className="lg:pt-20">
        <img
          className="w-full pr-6 md:pr-12"
          src={HeroBanner}
          alt="Modern house model"
        />
      </div>
    </div>
  );
}
