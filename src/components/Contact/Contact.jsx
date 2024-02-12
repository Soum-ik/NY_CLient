import { useState } from "react";
import Layout from "../Layout/layout";
// import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setForm({
      name: "",
      email: "",
      message: "",
      number: "",
    });
    alert("Thank You.");
  };

  const handleState = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  return (
    <div id="form" className=" sm:py-10 py-5  bg-slate-100">
      <h1 className=" text-[25px] font-Poppins text-center font-semibold my-2">
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
              <a
                type="submit"
                className="bg-gradient-to-r from-red-800 to-red-700 outline-none hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all disabled:opacity-75 disabled:cursor-progress"
                name="message"
                onClick={sendEmail}
              >
                Send Massage
              </a>
            </div>
          </>
        </form>
      </Layout>
    </div>
  );
};
export default Contact;
