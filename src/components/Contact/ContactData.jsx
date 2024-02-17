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
        const res = await axios.post(`${config.apiUrl}application/post`, form);
        console.log(res.data);
        setForm({
          name: "",
          email: "",
          message: "",
          number: "",
        });
        toast.success("Your Request Accept succesfully");
        setForm(true);
        setSubmitted(true);
        onSubmit();
      } catch (error) {
        toast.error(error);
      }
    };

    sendToBackend();
  };

  sendEmail();

  const handleState = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    // Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
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
            Send Massage
          </button>
        </div>
      </>
    </form>
  );
};

export default ContactData;
