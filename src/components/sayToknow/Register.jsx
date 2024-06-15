import { MdEmail } from "react-icons/md";
import contact from "../../../public/images/contactus.jpg";
import Layout from "../Layout/layout";
import axios from "axios";
import config from "../../../config";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState("");
  const Name = "Register User";

  const form = {
    email,
    Name,
  };

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
  const sendToBackend = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${config.apiUrl}application/post`,
        formDataWithDateTime,
      );
      if (data.status === "succes") {
        toast.success("Your Request Accept succesfully");
      } else {
        toast.error("Your Request Accept succesfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        className="mt-5 flex"
      >
        <div className="hidden sm:max-w-[1000px] md:block">
          <img
            className="max-h-[400px] min-w-[500px] overflow-hidden object-cover opacity-90"
            src={contact}
            alt=""
          />
        </div>

        <div className="w-full bg-primary p-5 py-10 font-semibold text-white md:max-w-max">
          <div>
            <h1 className="text-2xl md:text-3xl">Stay in the know</h1>
            <p className="mt-3 text-sm font-normal">
              Stay Up-to-Date with Our Latest News, Insights, and Updates
            </p>
          </div>

          <form
            onSubmit={sendToBackend}
            className="mt-5 grid grid-cols-3 gap-2 sm:gap-5"
          >
            <div className="col-span-2 flex min-w-max items-center rounded-md bg-white py-2 pl-2 pr-3 sm:pr-0">
              <MdEmail className="text-primary" size={22} />
              <input
                className="ml-2 min-w-[230px] rounded-md text-sm text-black outline-none md:max-w-[500px] lg:min-w-[300px]"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
              />
            </div>
            <button className=" col-span-1 ml-4 max-w-min rounded-md bg-white p-2 text-left text-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </Layout>
  );
}

export default Register;
