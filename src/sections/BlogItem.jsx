import { blog_list } from "../assets/assets";
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";

const BlogItem = ({ image, user, features, heading, date, text }) => {
  return (
    <div className="w-full flex flex-col font-merriweather bg-white gap-5 my-8 shadow-xl">
      <img src={image} alt="image" className="w-full h-auto" />
      <div className="flex w-full gap-8 px-8 mt-3 text-gray-700 font-normal">
        <p className="flex gap-1">
          <span className="mt-1">
            <FaUser />
          </span>
          <span>{user}</span>
        </p>
        <p className="flex gap-1">
          <span className="mt-1">
            <IoIosPricetags />
          </span>
          <span>{features}</span>
        </p>
      </div>
      <p className="text-xl lg:text-2xl font-bold px-8">{heading}</p>
      <div className="border-b border-gray-300 mx-8"></div>
      <div className="flex w-full justify-between mb-7 px-8">
        <p className="text-gray-700 flex gap-1">
          <span className="mt-1">
            <MdOutlineDateRange />
          </span>
          <span>{date}</span>
        </p>
        <p className="text-red-500">{text}</p>
      </div>
    </div>
  );
};
export default BlogItem;
