import { Link } from "react-router-dom";
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

  const { image } = useFetch(`${config.apiUrl}logo`);

  return (
    <>
      <footer className="relative z-50 overflow-hidden bg-slate-600/10 pb-10 pt-16 lg:pt-[70px]">
        <div className="px-5 lg:px-24 xl:px-32">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="flex items-center">
                  <img
                    className="h-20 w-[230px] object-cover"
                    src={image}
                    alt="Farjax Institute of Technology"
                  />
                </div>

                <p className="mb-7 opacity-70">
                  The Farjax Institute of Technology is a training institute
                  that provides training in various technology-related courses
                </p>
              </div>

              {footerItems.map((item, id) => (
                <FooterList key={id} items={item} />
              ))}

              <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                <div className="w-full">
                  <h4 className="text-dark mb-9 text-lg">Follow Us On</h4>
                  <div className="flex items-center gap-3">
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
                  <h1 className="mt-2 min-w-max text-sm">
                    {" "}
                    Developed & manage by Farjax Tech & Consulting Inc.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="mt-10 block text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <Link to={"/"} className="hover:text-black">
            Farjax Institute of Technology
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
