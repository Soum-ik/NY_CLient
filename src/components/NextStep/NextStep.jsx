import { Tab } from "@headlessui/react";
import styles from "../../style/style";
import Card from "./Card";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";

const NextStep = () => {
  const [options, setOptions] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);

  const fetchOptions = useCallback(async () => {
    const res = await axios.get(`${config.apiUrl}catagori`);
    setOptions(res.data);
  }, []);

  // useCallback for the card details fetching function
  const fetchCardDetails = useCallback(async () => {
    const res = await axios.get(`${config.apiUrl}choosepath`);
    setCardDetails(res.data);
  }, []);

  useEffect(() => {
    // Call both memoized functions when the component mounts
    fetchOptions();
    fetchCardDetails();
  }, [fetchOptions, fetchCardDetails]);

  const handleCourse = useCallback(async (name) => {
    const CardDetails = await axios.get(
      `${config.apiUrl}choose/course/${name}`
    );
    setCardDetails(CardDetails.data);
  }, []);

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}  relative`}
      id="course"
    >
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.marginY}  `}
      >
        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row space-y-4 sm:px-10  sm:gap-10 sm:space-y-0 sm:space-x-1 mb-10">
            {options.map((option) => (
              <Tab
                key={option._id}
                className="w-full bg-black/5  hover:bg-color hover:text-white ease-in-out duration-300 hover:shadow-md outline-none rounded-lg py-2.5 text-sm font-Poppins leading-5"
                onClick={() => handleCourse(option.name)}
              >
                {option.name}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <h4 className="   text-4xl  font-semibold  text-center  z-50">
          Choose Your Path
        </h4>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {cardDetails.map((CardDetail) => (
            <Card
              id={CardDetail._id}
              key={CardDetail._id}
              image={CardDetail.icon}
              name={CardDetail.name}
              shortD={CardDetail.shortDetails}
              btn={CardDetail.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NextStep;
