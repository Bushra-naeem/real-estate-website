import React from "react";
import { blog_list } from "../assets/assets";
import BlogItem from "./BlogItem";

export default function Blog() {
  return (
    <section
      className="bg-slate-50 shadow-xl flex flex-col items-center gap-5 py-20 px-4 md:px-12 lg:px-24"
      id="blog"
    >
      <button className="text-red-500 font-semibold border-2 border-pink-100 py-1 px-3 bg-pink-50 rounded-3xl">
        News & Blogs
      </button>
      <h1 className="text-2xl sm:text-5xl font-bold">Latest News Feeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blog_list.map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={item.image}
              user={item.user}
              features={item.features}
              heading={item.heading}
              date={item.date}
              text={item.text}
            />
          );
        })}
      </div>
    </section>
  );
}
