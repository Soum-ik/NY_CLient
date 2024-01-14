import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import Navlink from "./NavbarLinks";
const NavContact = () => {
  return (
    <div>
      <nav className=" mt-3 sm:flex items-center justify-between hidden font-Headingfont">
        {/* left bar */}
        <div className=" flex items-center gap-3 justify-center">
          <Link to={"/"} className="">
            <img
              className=" w-[230px]"
              src="/images/mainLogo.png"
              alt="Farjax Institute of Technology"
            />
          </Link>
          <p className=" ">PROFESSIONAL EDUCATION</p>
        </div>

        {/* right bar */}
        <div className=" flex justify-center items-center gap-5">
          <div className=" space-x-2  ">
            <Link>Login</Link>
            <span>|</span>
            <Link>Singup Now</Link>
          </div>
          <div className=" flex space-x-2 text-[25px] ">
            <Navlink
              path={`https://www.facebook.com/farjaxtci`}
              icon={
                <IoLogoFacebook className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
              }
            />

            <Navlink
              path={`/`}
              icon={
                <IoLogoTwitter className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
              }
            />

            <Navlink
              path={`/`}
              icon={
                <IoLogoYoutube className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
              }
            />
            <Navlink
              path={`https://www.linkedin.com/in/saidur-md-rahman-40a7b4211/`}
              icon={
                <IoLogoLinkedin className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
              }
            />

            <Navlink
              path={`https://github.com/farjaxiot`}
              icon={
                <IoLogoGithub className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
              }
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavContact;
