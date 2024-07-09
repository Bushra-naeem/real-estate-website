import { property_list } from "../assets/assets"
import { IoResize } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const PropertyItem = ({image, price, heading, paragraph, authorImg, name, nameDesc}) => {
    return (
        <div className="w-full flex flex-col flex-grow bg-white gap-3 my-8 shadow-xl">
            <img src={image} alt="" className="w-[1200px] h-80" />
            <p className="text-red-500 font-semibold px-8">{price}</p>
            <p className="font-bold font-mono px-8 text-xl lg:text-2xl">{heading}</p>
            <p className="px-8 text-gray-800 font-sans">{paragraph}</p>

            <span className="border-b text-gray-900 my-2"></span>



      <div className="flex flex-wrap items-center mb-6 pt-1 pl-6 sm:px-8 gap-3">
        <div className="flex items-center flex-shrink-0">
          <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3" src={authorImg} alt="" />
          <div className="flex flex-col justify-between">
            <a href="#" className="font-bold text-base">{name}</a>
            <p className="text-base">{nameDesc}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-lg flex-wrap flex-grow">
          <span className="p-2 sm:p-3 bg-gray-100 text-gray-900 rounded-full">
            <IoResize />
          </span>
          <span className="p-2 sm:p-3 bg-gray-100 text-gray-900 rounded-full">
            <CiHeart />
          </span>
          <span className="p-2 sm:p-3 bg-gray-100 text-gray-900 rounded-full">
            <IoIosAddCircleOutline />
          </span>
        </div>
      </div>

    </div>
    )
}

export default PropertyItem
