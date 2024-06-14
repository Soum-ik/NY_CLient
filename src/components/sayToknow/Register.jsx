import { MdEmail } from "react-icons/md";
import contact from "../../../public/images/contactus.jpg";
import RegistrationComponent from "./Email";
import Layout from "../Layout/layout";

function Register() {
  return (
    <Layout>
      <div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        className="mt-5 flex "
      >
        <div className="hidden md:block sm:max-w-[1000px]">
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

          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="flex items-center rounded-md bg-white py-2 pl-2 pr-3 sm:pr-0">
              <MdEmail className="text-primary" size={22} />
              <input
                className="min-w-[100px] rounded-md text-sm ml-2 text-black outline-none sm:min-w-[300px]"
                type="email"
                name="user_email"
              />
            </div>
            <button className=" text-left bg-white text-primary max-w-min p-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
