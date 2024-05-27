import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import config from "../../../config";

import Layout from "../Layout/layout";
import Card from "../NextStep/Card";

function Courses() {
  const [cardDetails, setCardDetails] = useState([]);

  const fetchCardDetails = useCallback(async () => {
    const res = await axios.get(`${config.apiUrl}choosepath`);
    setCardDetails(res.data);
  }, []);

  useEffect(() => {
    fetchCardDetails();
  }, []);

  return (
    <Layout className="">
      {/* <h1 className="  text-[30px] sm:text-[50px]  mt-10 sm:mt-12 font-semibold text-center">
        The Information Technology Course we offer
      </h1> */}
      <p className=" text-center max-w-lg text-lg mx-auto sm:text-4xl my-10">
      The Information Technology Course we offer
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
      >
        {cardDetails.map((CardDetail) => (
          <Card
            key={CardDetail._id}
            id={CardDetail._id}
            image={CardDetail.icon}
            name={CardDetail.name}
            shortD={CardDetail.shortDetails}
            btn={CardDetail.buttonText}
            contactForm={true}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Courses;