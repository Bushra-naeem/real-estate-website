import ServiceItem from "./ServiceItem";
import { service_list } from "../assets/assets";
import { Link } from "react-scroll";
import "../components/custom.css";

export default function Service() {
  return (
    <section
      className="bg-slate-50 flex flex-col items-center justify-center font-merriweather md:flex-wrap gap-5 py-24 px-3 lg:px-28"
      id="service"
    >
      <button className="text-red-500 font-semibold border-2 border-pink-100 py-1 px-3 bg-pink-50 rounded-3xl">
        Our Services
      </button>
      <h1 className="text-3xl sm:text-5xl font-bold">Our Main Focus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        {service_list.map((item, index) => {
          return (
            <ServiceItem
              key={index}
              heading={item.heading}
              description={item.description}
              image={item.image}
              text={item.text}
            />
          );
        })}
      </div>
    </section>
  );
}
