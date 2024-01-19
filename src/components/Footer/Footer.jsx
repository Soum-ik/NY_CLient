import { Link } from "react-router-dom";
import Logo from "../../../public/images/mainLogo.png";
import footerItems from "./FooterDatils";
import FollowUs from "./FollowUs";
import FooterList from "./FooterList";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";
import { useFetch } from "../../libs/fetchData";
export default function Footer() {
  const link  = useFetch("http://localhost:5000/social/links");
  console.log(link);
  return (
    <>
      <footer className="relative z-50 bg-slate-600/10 pt-16 pb-10 lg:pt-[70px] lg:pb-10 overflow-hidden">
        <div className="px-5 lg:px-24 xl:px-32">
          <div className="container mx-auto ">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="flex items-center">
                  <img className=" text-white" src={Logo} alt="logo" />
                </div>

                <p className="mb-7 text-base text-body-color font-textFont mt-5 text-black">
                  The Institute of Technology is a training institute that
                  provides training in various technology-related courses
                </p>
              </div>

              {footerItems.map((item, id) => (
                <FooterList key={id} items={item} />
              ))}

              <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold font-Headingfont text-dark">
                    Follow Us On
                  </h4>
                  <div className="mb-6 flex items-center gap-3">
                    <FollowUs
                      icon={<IoLogoFacebook />}
                      link={`https://www.facebook.com/farjaxtci`}
                    />
                    <FollowUs
                      icon={<BsTwitterX />}
                      link={`https://github.com/farjaxiot`}
                    />
                    <FollowUs
                      icon={<IoLogoLinkedin />}
                      link={`https://www.linkedin.com/in/saidur-md-rahman-40a7b4211/`}
                    />
                    <FollowUs icon={<IoLogoYoutube />} link=" /" />
                    <FollowUs icon={<BsInstagram />} link="/" />
                    <FollowUs icon={<BsTelegram />} link="/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <Link to={"/"} className="hover:text-black">
            Soumik
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
