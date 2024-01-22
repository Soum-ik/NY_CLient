import { Link } from "react-router-dom";
import FollowUs from "../Footer/FollowUs";

import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
// import { BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";
import { useFetch } from "../../libs/fetchData";

const NavContact = () => {
  const source = useFetch("http://localhost:5000/social/links");

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
          <div className=" flex items-center justify-center gap-3">
            <FollowUs icon={<IoLogoFacebook />} link={source.facebook} />
            {/* <FollowUs icon={<BsTwitterX />} link={source.twitter} /> */}
            <FollowUs icon={<IoLogoLinkedin />} link={source.linkedin} />
            <FollowUs icon={<IoLogoYoutube />} link={source.youtube} />
            {/* <FollowUs icon={<BsInstagram />} link={source.instagram} /> */}
            {/* <FollowUs icon={<BsTelegram />} link={source.telegram} /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavContact;
