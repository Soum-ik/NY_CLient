import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lc5fuqp",
        "template_idqqlkl",
        form.current,
        "nbX3c274FG1zLEEqt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
          alert("You registration successfully");
        },
        (error) => {
          alert("You registration successfully");

          console.log(error);
        }
      );
  };

  return (
    <div className=" px-5 sm:px-20 py-10 flex flex-col items-center justify-center bg-black/90 text-white">
      <div>
        <h1 className=" text-left font-semibold text-[27px] sm:text-[35px] font-Headingfont">
          Stay in the know
        </h1>
        <h4 className="  font-light   sm:min-w-[500px] text-[14px] text-white/70">
          Stay Up-to-Date with Our Latest News, Insights, and Updates
        </h4>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className=" flex gap-5 sm:gap-10 mt-5 sm:mt-10">
            {/* <input className=" outline-none border-b text-black/70 font-Poppins  p-2 bg-none rounded-xl text-[12px] min-w-[200px]" /> */}

            <div className=" flex items-center justify-center bg-black  p-3 gap-2 rounded-md">
              <MdEmail size={22} />
              <input
                className=" outline-none  font-Poppins bg-black text-[12px] min-w-[200px] sm:min-w-[300px]"
                type="email"
                name="user_email"
              />
            </div>

            <button
              type="submit"
              className=" shadow-lg bg-gradient-to-r from-red-800 to-red-700 backdrop-blur-2xl px-3 hover:px-[10px] py-1 rounded-lg"
            >
              Register
            </button>
          </div>
          {/* <div className=" mt-10 mb-2 flex space-x-2 text-[14px] font-light sm:gap-3">
            <input type="checkbox" name="" id="" />
            <p className=" text-white/70">
              I accepted all of terms and conditions
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
