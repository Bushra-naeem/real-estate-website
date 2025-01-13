import React from "react";
import aboutBanner1 from "../assets/images/about-banner-1.png";
import aboutBanner2 from "../assets/images/about-banner-2.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoWineOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section
      className="flex flex-col md:flex-col lg:flex-row font-merriweather py-6 sm:py-8 gap-10 sm:px-24 w-full text-xs sm:text-base"
      id="about"
    >
      <div className="w-full md:w-full lg:w-1/2">
        <div className="relative">
          <img src={aboutBanner1} alt="" className="w-full" />
          <img
            src={aboutBanner2}
            alt=""
            className="absolute top-[55%] left-2 w-1/2"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-8 sm:px-6 lg:mx-0 space-y-4">
        <div>
          <button className="text-red-500 font-semibold border-2 border-pink-100 py-2 p-4 bg-pink-50 rounded-3xl mt-8 lg:mt-6">
            About Us
          </button>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            <span className="inline-block">
              The Leading Real Estate Rental Marketplace.
            </span>
          </h1>
        </div>
        <div className="mb-3 text-[16px]">
          Over 39,000 people work for us in more than 70 countries all over the
          This breadth of global coverage, combined with specialist services.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-4">
          <div className="flex items-center gap-2">
            <span className="mt-1 text-red-500 bg-pink-100 p-2 sm:p-3 rounded-full">
              <IoHomeOutline />
            </span>
            <span className="whitespace-nowrap text-[16px]">
              Smart Home Design
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="mt-1 text-red-500 bg-pink-100 p-2 sm:p-3 rounded-full">
              <IoLeafOutline />
            </span>
            <span className="whitespace-nowrap text-[16px]">
              Beautiful Scene Around
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="mt-1 text-red-500 bg-pink-100 p-2 sm:p-3 rounded-full">
              <IoWineOutline />
            </span>
            <span className="whitespace-nowrap text-[16px]">
              Exceptional Lifestyle
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="mt-1 text-red-500 bg-pink-100 p-2 sm:p-3 rounded-full">
              <IoShieldCheckmarkOutline />
            </span>
            <span className="whitespace-nowrap text-[16px]">
              Complete 24/7 Security
            </span>
          </div>
        </div>
        <div className="border-2 text-[16px] border-pink-100 bg-pink-50 py-4 px-5 mb-6">
          "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem
          ipsum dolor sit amet"
        </div>
        <div>
          <Link
            to="service"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="text-white bg-red-400 border-2 border-red-400 px-4 py-2 sm:px-8 sm:py-4 inline-block cursor-pointer"
          >
            OUR SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}
