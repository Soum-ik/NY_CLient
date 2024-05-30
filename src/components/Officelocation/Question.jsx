/* eslint-disable react/prop-types */
import { IoClose, IoCloudDoneOutline } from "react-icons/io5";
FaFacebook;
import { PiPhoneCallLight } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";

import { FaMailBulk } from "react-icons/fa";

import { BsClock, BsWhatsapp } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

import Layout from "../Layout/layout";
import image from "../../../public/images/img5.jpg";
import { useEffect, useState } from "react";
import config from "../../../config";
import axios from "axios";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa6";

function Question() {
  return (
    <div>
      <Layout>
        <div className=" py-16">
          <div className=" text-center text-[#1351D8] flex items-center justify-center gap-1">
            <h6 className=" w-2 h-2 bg-[#1351D8] rounded-full !uppercase"></h6>
            <h6 className="uppercase">Keep in touch</h6>
          </div>
          <h1 className="text-center max-w-md mx-auto font-semibold  text-4xl">
            Do You Have Some <span className=" text-[#558bff]">Question</span>{" "}
            For Us?
          </h1>
          <div className=" mt-10 lg:mt-20 grid grid-cols-1 gap-10 md:gap-0 sm:grid-cols-2 place-content-center mx-auto lg:grid-cols-3">
            {contactData.map((data, idx) => (
              <div
                className=" flex flex-col md:items-start items-center space-y-1 lg:space-y-3 px-5 md:border-r md:pl-10 last:border-none"
                key={idx}
              >
                <h1 className=" mb-4 bg-[#E7EDFB] p-4 max-w-max rounded-full">
                  {data.icon}
                </h1>
                <h1 className="  font-bold text-black/85 text-2xl ">
                  {data.title}
                </h1>
                <p className="opacity-70 text-center md:text-start">
                  {data.description}
                </p>
                <h1 className=" flex flex-col font-semibold text-black/85 text-xl ">
                  {data.link && (
                    // eslint-disable-next-line react/jsx-no-target-blank
                    <a
                      target="_blank"
                      className="  !px-5 py-2 shadow-md  rounded-full"
                      href={data.link}
                    >
                      Schedule Now
                    </a>
                  )}
                  {!data.link && data.contact}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Question;

export const Contact_us = () => {
  const [loading, setLoading] = useState(false);
  const [thank, setThank] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

  // Format the time manually
  const formattedTime = `${currentDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${currentDate.getMinutes().toString().padStart(2, "0")}`;

  const formDataWithDateTime = {
    ...form,
    date: formattedDate,
    time: formattedTime,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (form.message.length < 30) {
      alert("Make sure to your message more then 30 word");
      return;
    }
    if (form.name.length > 20) {
      alert("Make Sure to Your Name shorter");
      return;
    }
    if (form.number.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    const sendToBackend = async () => {
      try {
        setLoading(true);
        const res = await axios.post(
          `${config.apiUrl}application/post`,
          formDataWithDateTime
        );
        console.log(res.data);
        setForm({
          name: "",
          email: "",
          message: "",
          number: "",
        });
        setLoading(false);
        setThank(true);
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    };

    sendToBackend();
  };

  const handleState = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  // Function to validate email
  const validateEmail = (email) => {
    // Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${config.apiUrl}about/banner`);
      // /
      setImage(res.data[2].Image);
    };
    fetch();
  }, []);
  const [image, setImage] = useState("");
  return (
    <div className="relative my-10">
      <div className=" shadow-xl  -mb-20 rounded-xl max-w-7xl md:mx-auto h-auto flex mx-5 flex-col lg:flex-row justify-between">
        <div className=" lg:block hidden object-fill">
          <img
            className=" md:max-w-2xl h-full rounded-s-xl object-cover "
            src={image}
            alt=""
          />
        </div>
        <div className=" space-y-7 bg-white flex-grow md:px-8 px-4 py-5 md:py-10 rounded-xl">
          <div className="  text-[#1351D8] flex items-center  gap-1">
            <h6 className=" w-2 h-2 bg-[#1351D8] rounded-full !uppercase"></h6>
            <h6 className="uppercase">Contact us</h6>
          </div>
          <h1 className="  font-semibold text-4xl font-Acme">
            {" "}
            Distinguish Yourself in the IT
            <span className=" text-[#558bff] capitalize"> Profession</span> with
            Our IT Training
          </h1>

          <p className=" opacity-70  whitespace-pre-line">
            {`Acquire the skills and knowledge essential for success in the
            competitive tech industry. Advance your career with our expert-led
            courses, designed according to the latest industry standards and
            technological advancements`}
          </p>
          <form
            onSubmit={sendEmail}
            className=" grid grid-cols-6 space-y-3 w-full pb-10"
          >
            <div className=" col-span-6 flex gap-2 md:gap-5 w-full">
              <input
                value={form.name}
                onChange={(e) => handleState(e, "name")}
                placeholder={"Enter your name"}
                className=" p-3 w-full rounded-lg focus:outline-none  border-2"
                type="text"
              />
              <input
                value={form.number}
                onChange={(e) => handleState(e, "number")}
                placeholder={"Enter your phone number"}
                className=" p-3 w-full   rounded-lg focus:outline-none  border-2"
                type="number"
              />
            </div>
            <input
              className=" col-span-6  p-3  rounded-lg focus:outline-none  border-2"
              type="text"
              value={form.email}
              onChange={(e) => handleState(e, "email")}
              placeholder={"Enter your email"}
            />
            <textarea
              className=" min-h-32 col-span-6 p-3  rounded-lg focus:outline-none  border-2"
              value={form.message}
              onChange={(e) => handleState(e, "message")}
            ></textarea>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#1351D8] px-4  rounded-3xl min-w-max text-white py-2"
            >
              {loading ? `Sending...` : `Send Message`}
            </button>
          </form>
        </div>
        {thank && <ThankYou onClose={() => setThank(false)} />}
      </div>

      {/* button component */}
      <div className=" bg-primary pt-40 py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className=" grid grid-cols-1 md:space-y-0 space-y-10 place-content-center md:grid-cols-2 md:gap-10 lg:gap-0 lg:grid-cols-4">
            {data.map((item, idx) => (
              <div key={idx} className="flex items-center flex-col gap-2">
                <h1 className=" bg-[#1351D8] max-w-max rounded-full p-3">
                  {item.icons}
                </h1>
                <h1 className=" text-white/90 text-lg ">{item.text}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// pop up component
const ThankYou = ({ onClose }) => {
  return (
    <div className=" z-50 duration-500 ease-in-out fixed inset-0 flex  items-center justify-center bg-black/20">
      <div className=" z-50 max-w-lg min-w-[350px] p-5 rounded-xl bg-white flex items-center justify-center flex-col relative">
        <h1 className=" ">
          <IoCloudDoneOutline size={60} />
        </h1>
        <h1 className=" mt-5 px-3  text-center text-2xl font-semibold">
          Thank you for your submission. <br />
          <span className=" text-sm opacity-60">
            {" "}
            We will contact you soon.
          </span>
        </h1>

        <div
          onClick={onClose}
          className=" absolute top-2 right-2 bg-[#1351D8] rounded-3xl text-white p-1"
        >
          <IoClose size={20} />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    icons: <IoCall className=" text-white" size={25} />,
    text: "(718) 785-4636",
  },
  {
    icons: <FaFacebook className=" text-white" size={25} />,
    text: "http://www.facebook.com/faxiot",
  },
  {
    icons: <BsWhatsapp className=" text-white" size={25} />,
    text: "+1917 396 2689",
  },
  {
    icons: <BsClock className=" text-white" size={25} />,
    text: "08:00 AM - 06:00 PM",
  },
];

const contactData = [
  {
    icon: <PiPhoneCallLight size={30} className="text-[#1351D8]" />,
    title: "Give Us A Call",
    description:
      " Our team is dedicated to providing exceptional service and support. Reach out and experience our commitment to excellence ",
    contact: "(718) 785-4636",
  },
  {
    icon: <FaMailBulk size={30} className=" text-[#1351D8]" />,
    title: "Send Us An Email",
    description:
      "We're here to help and answer any questions you may have. Reach out to us for prompt and professional support",
    contact: "farjaxtc@gmail.com",
  },
  {
    icon: <GrMapLocation size={30} className=" text-[#1351D8]" />,
    title: "Schedule an introductory call",
    description:
      "Let's arrange an introductory call to discuss the details further",
    contact: "Schedule Now",
    link: "https://calendar.app.google/Jhk7E87bc9oKPRU77",
  },
];
