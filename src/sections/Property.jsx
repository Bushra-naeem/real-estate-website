import React from "react";
import { property_list } from "../assets/assets";
import PropertyItem from "./PropertyItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Property() {
  return (
    <section
      className="bg-white font-merriweather shadow-xl flex flex-col items-center gap-5 py-20 px-2 md:px-2 
      lg:px-4"
      id="property"
    >
      <button className="text-red-500 font-semibold border-2 border-pink-100 py-1 px-3 bg-pink-50 rounded-3xl">
        Properties
      </button>
      <h1 className="text-3xl sm:text-5xl font-bold">Featured Listings</h1>
      <div className="w-full flex flex-col items-center">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="px-3"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1198 },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1197, min: 600 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 599, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {property_list.map((item, index) => (
            <PropertyItem
              key={index}
              image={item.image}
              price={item.price}
              heading={item.heading}
              paragraph={item.paragraph}
              authorImg={item.authorImg}
              name={item.name}
              nameDesc={item.nameDesc}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
