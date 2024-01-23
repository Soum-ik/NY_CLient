import { Tab } from "@headlessui/react";
import styles from "../../style/style";
import Card from "./Card";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const NextStep = () => {
  const [options, setOptions] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  console.log(cardDetails);
  useEffect(() => {
    // Fetching options data from API

    const fetch = async () => {
      const res = await axios.get("http://localhost:5000/catagori");
      setOptions(res.data);
    };
    fetch();
    const Path = async () => {
      const res = await axios.get("http://localhost:5000/choosepath");
      setCardDetails(res.data);
    };
    Path();
  }, []);

  const handleCourse = useCallback(async (name) => {
    const CardDetails = await axios.get(
      `http://localhost:5000/choose/course/${name}`
    );
    setCardDetails(CardDetails.data);
  }, []);

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}  relative`}
    >
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.marginY}  `}
      >
        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row space-y-4 sm:px-10  sm:gap-10 sm:space-y-0 sm:space-x-1 mb-10">
            {options.map((option) => (
              <Tab
                key={option.id}
                className="w-full bg-black/5  hover:bg-color hover:text-white ease-in-out duration-300 hover:shadow-md outline-none rounded-lg py-2.5 text-sm font-Poppins leading-5"
                onClick={() => handleCourse(option.name)}
              >
                {option.name}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <h4 className="    text-[35px] font-Headingfont font-bold  text-center  z-50">
          Choose Your Path
        </h4>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {cardDetails.map((CardDetail) => (
            <Card
              id={CardDetail._id}
              key={CardDetail.id}
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
