import { BsPhone } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Layout from "../Layout/layout";

function Question() {
  return (
    <Layout>
      <div className=" py-16">
        <h1 className="text-center font-medium  text-4xl">
          Do You Have Some Question For Us?
        </h1>
        <div className="mt-20 grid grid-cols-1 gap-10 md:gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {contactData.map((data, idx) => (
            <div className=" flex flex-col space-y-1 lg:space-y-3" key={idx}>
              <h1 className=" mb-4 bg-primary/90 p-2 max-w-max rounded-full">
                {data.icon}
              </h1>
              <h1 className="  font-semibold text-xl font-Poppins">
                {data.title}
              </h1>
              <p className="opacity-70">{data.description}</p>
              <h1 className=" font-semibold ">{data.contact}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Question;

const contactData = [
  {
    icon: <BsPhone size={30} className="text-white" />,
    title: "Give Us A Call",
    description:
      "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.",
    contact: "(718) 785-4636",
  },
  {
    icon: <MdEmail size={30} className=" text-white" />,
    title: "Send Us An Email",
    description:
      "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.",
    contact: "farjaxtc@gmail.com",
  },
  {
    icon: <IoLocation size={30} className=" text-white" />,
    title: "Visit Our Office",
    description:
      "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.",
    contact: "New York, USA",
  },
];
