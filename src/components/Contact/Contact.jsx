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
          formDataWithDateTime,
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
      data-aos-duration="500"
      data-aos="fade-up"
      // data-aos-anchor-placement="center-center"
      id="form"
      className="bg-slate-100 px-5 py-5 sm:py-10 md:px-0"
    >
      <h1 className="my-2 text-center text-4xl font-semibold opacity-80">
        Request for course information
      </h1>
      <div className="mb-10 mt-3 whitespace-pre-line max-w-sm  sm:max-w-max mx-auto text-center opacity-70">
        <p>
          To request more information about our online computer science related
          training,
        </p>
        <p>
          {" "}
          please fill out the form below. One of our representatives will
          contact you shortly.
        </p>
      </div>
      <Layout>
        <form
          data-aos-duration="500"
          data-aos="fade-up"
          onSubmit={sendEmail}
          className={`flex h-full min-w-[330px] grid-cols-1 flex-col justify-between rounded-md border p-2 shadow-2xl sm:col-span-7 sm:min-w-[400px] md:min-w-[600px] lg:col-span-8`}
        >
          <>
            <div className="mt-4 grid w-full grid-cols-1 gap-4 md:mt-0 lg:grid-cols-2">
              <input
                value={form.name}
                onChange={(e) => handleState(e, "name")}
                placeholder={"Enter your name"}
                className={`border-1 w-full rounded-md border-gray-200 p-4 text-black shadow-md focus:border-transparent focus:outline-transparent focus:ring-0`}
              />
              <input
                value={form.number}
                onChange={(e) => handleState(e, "number")}
                placeholder={"Enter your phone number"}
                className={`border-1 w-full rounded-md border-gray-200 p-4 text-black shadow-md focus:border-transparent focus:outline-transparent focus:ring-0`}
                required
                type="tel"
              />
            </div>
            <div className="my-4 w-full flex-1">
              <input
                value={form.email}
                onChange={(e) => handleState(e, "email")}
                placeholder={"Enter your email"}
                className={`border-1 w-full rounded-md border-gray-200 p-4 text-black shadow-md focus:border-transparent focus:outline-transparent focus:ring-0`}
                type="email"
                required
              />
            </div>

            <div className="my-4 w-full flex-1">
              <textarea
                value={form.message}
                onChange={(e) => handleState(e, "message")}
                className="border-1 min-h-[20vh] w-full rounded-md border-gray-200 p-3 text-black shadow-md focus:border-transparent focus:outline-transparent focus:ring-0 md:min-h-[30vh]"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>

            <div className="mt-1 text-center">
              <button
                type="submit"
                className="rounded-3xl bg-[#06074f] px-7 py-3.5 text-center text-sm font-medium text-white outline-none transition-all hover:bg-gradient-to-bl disabled:cursor-progress disabled:opacity-75 md:hover:px-12"
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
