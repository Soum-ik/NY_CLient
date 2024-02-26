/* eslint-disable react/prop-types */
import { useState } from "react";
import config from "../../../config";
import axios from "axios";
import toast from "react-hot-toast";

const ContactData = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
  const sendEmail = async (event) => {
    event.preventDefault(); // Prevent form submission
    // Validate form data
    const validateEmail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (form.message.length < 30) {
      toast.error("Make sure your message is at least 30 characters long.");
      return;
    }
    if (form.name.length > 20) {
      toast.error("Make sure your name is shorter.");
      return;
    }
    if (form.number.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }

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
      toast.success("Your request was submitted successfully.");
      setSubmitted(true);
      onSubmit();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while submitting your request.");
    }
  };

  const handleState = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={sendEmail}
      className={` min-w-[330px] sm:col-span-7 grid-cols-1  lg:col-span-8 sm:min-w-[400px] md:min-w-[600px] h-full flex flex-col justify-between shadow-2xl p-2 border rounded-md ${
        submitted ? "hidden" : ""
      }`}
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
            type="number"
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
            className="w-full rounded-md shadow-md p-3 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[200px] md:min-h-full lg:min-h-full"
            placeholder="Your Message"
            name="message"
            required
          />
        </div>

        <div className="text-center mt-1">
          <button
            type="submit"
            className="bg-gradient-to-r from-red-800 to-red-700 outline-none hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all disabled:opacity-75 disabled:cursor-progress"
            name="message"
          >
            Send Message
          </button>
        </div>
      </>
    </form>
  );
};

export default ContactData;
