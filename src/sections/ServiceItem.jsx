import { service_list } from "../assets/assets";
const ServiceItem = ({image,heading,description,text}) => {
    {console.log(service_list);}
    return (
        <div className="w-full flex flex-col items-center bg-white gap-6 px-12 py-16 my-5 shadow-xl">
            <img src={image} alt="image" />
            <p className="text-xl sm:text-3xl font-bold">{heading}</p>
            <p className="text-center text-gray-500 mt-2 text-xl">{description}</p>
            <p className="text-gray-600 font-semibold">{text}</p>
        </div>
       
    )
}

export default ServiceItem