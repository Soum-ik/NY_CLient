import { useState } from "react";
import Layout from "../Layout/layout";
import axios from "axios";
import config from "../../../config";
import toast from "react-hot-toast";
const Contact = () => {
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
        toast.success("Your Request Accept succesfully");
      } catch (error) {
        toast.error(error);
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

  return (
    <div
      data-aos-duration="1000"
      data-aos="fade-up"
      // data-aos-anchor-placement="center-center"
      id="form"
      className=" sm:py-10 py-5 px-5 md:px-0  bg-slate-100"
    >
      <h1 className="text-[23px] md:text-[25px] text-center headingTextSize font-semibold my-2">
        Request for course information
      </h1>
      <div className="text-center mb-10 sm:px-7 text-[15px]">
        <p>
          To request more information about our online computer science related
          training, please fill out the
        </p>
        <p>form below. One of our representatives will contact you shortly.</p>
      </div>
      <Layout>
        <form
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          onSubmit={sendEmail}
          className={` min-w-[330px] sm:col-span-7 grid-cols-1  lg:col-span-8 sm:min-w-[400px] md:min-w-[600px] h-full flex flex-col justify-between shadow-2xl p-2 border rounded-md `}
        >
          <>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full mt-4 md:mt-0">
              <input
                value={form.name}
                onChange={(e) => handleState(e, "name")}
                placeholder={"Enter your name"}
                className={`w-full rounded-md shadow-md border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
              />
              <input
                value={form.number}
                onChange={(e) => handleState(e, "number")}
                placeholder={"Enter your phone number"}
                className={`w-full rounded-md shadow-md border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
                required
                type="tel"
              />
            </div>
            <div className="w-full my-4 flex-1">
              <input
                value={form.email}
                onChange={(e) => handleState(e, "email")}
                placeholder={"Enter your email"}
                className={`w-full rounded-md shadow-md border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
                type="email"
                required
              />
            </div>

            <div className="w-full my-4 flex-1">
              <textarea
                value={form.message}
                onChange={(e) => handleState(e, "message")}
                className="w-full rounded-md shadow-md p-3 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[20vh] md:min-h-[30vh] "
                placeholder="Your Message"
                name="message"
                required
              />
            </div>

            <div className="text-center mt-1">
              <button
                type="submit"
                className="bg-[#06074f] outline-none hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all disabled:opacity-75 disabled:cursor-progress"
                name="message"
              >
                Send Message
              </button>
            </div>
          </>
        </form>
      </Layout>
    </div>
  );
};

export default Contact;
