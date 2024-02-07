import { Link } from "react-router-dom";
import Logo from "../../../public/images/mainLogo.png";
import footerItems from "./FooterDatils";
import FollowUs from "./FollowUs";
import FooterList from "./FooterList";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";
import { useFetch } from "../../libs/fetchData";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../config";

export default function Footer() {
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${config.apiUrl}choosepath`);
      setDatas(res.data);
    };
    fetchData();
  }, []);
  const source = useFetch(`${config.apiUrl}social/links`);

  return (
    <>
      <footer className="relative z-50 bg-slate-600/10 pt-16 pb-10 lg:pt-[70px] overflow-hidden">
        <div className="px-5 lg:px-24 xl:px-32">
          <div className="container mx-auto ">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="flex items-center">
                  <img className=" text-white" src={Logo} alt="logo" />
                </div>

                <p className="mb-7 text-body-color text-[15px] mt-5 text-black">
                  The Institute of Technology is a training institute that
                  provides training in various technology-related courses
                </p>
              </div>

              {footerItems.map((item, id) => (
                <FooterList key={id} items={item} />
              ))}

              <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                <div className=" w-full">
                  <h4 className="mb-9 text-lg text-dark">Follow Us On</h4>
                  <div className=" flex items-center gap-3">
                    <FollowUs
                      icon={<IoLogoFacebook />}
                      link={source.facebook}
                    />
                    <FollowUs icon={<BsTwitterX />} link={source.twitter} />
                    <FollowUs
                      icon={<IoLogoLinkedin />}
                      link={source.linkedin}
                    />
                    <FollowUs icon={<IoLogoYoutube />} link={source.youtube} />
                    <FollowUs icon={<BsInstagram />} link={source.instagram} />
                    <FollowUs icon={<BsTelegram />} link={source.telegram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="block mt-10 text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <Link to={"/"} className="hover:text-black">
            Soumik
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
