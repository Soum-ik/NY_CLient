import { Tab } from "@headlessui/react";
import styles from "../../style/style";
import { CardDetails, offers } from "../NextStep/CardDetails";
import Card from "./Card";

const NextStep = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}  relative`}
    >
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.marginY}  `}
      >
        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row space-y-4 sm:px-10  sm:gap-10 sm:space-y-0 sm:space-x-1 mb-10">
            {offers.map((offer) => (
              <Tab
                key={offer.id}
                className="w-full bg-black/5  hover:bg-color hover:text-white ease-in-out duration-300 hover:shadow-md outline-none rounded-lg py-2.5 text-sm font-Poppins leading-5"
              >
                {offer.name}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <h4 className="    text-[35px] font-Headingfont font-bold  text-center  z-50">
          Choose Your Path
        </h4>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {CardDetails.map((CardDetail) => (
            <Card
              key={CardDetail.id}
              image={CardDetail.image}
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
