import { NavLink } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const MobileNavCon = () => {
  console.log("dhsajfjks");
  return (
    <div className=" flex  text-[25px] ">
      <NavLink
        path={`https://www.facebook.com/farjaxtci`}
        icon={
          <IoLogoFacebook
            className="h-8 w-8   border 
          rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-500"
          />
        }
      />

      <NavLink
        path={`/`}
        icon={
          <IoLogoTwitter className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
        }
      />

      <NavLink
        path={`/`}
        icon={
          <IoLogoYoutube className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
        }
      />
      <NavLink
        path={`https://www.linkedin.com/in/saidur-md-rahman-40a7b4211/`}
        icon={
          <IoLogoLinkedin className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
        }
      />

      <NavLink
        path={`https://github.com/farjaxiot`}
        icon={
          <IoLogoGithub className="border-gray-700  border rounded-full  border-dotted p-[3px]" />
        }
      />
    </div>
  );
};
export default MobileNavCon;
