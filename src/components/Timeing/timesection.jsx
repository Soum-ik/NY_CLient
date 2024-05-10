import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useData } from "../../Context/Context-api";
import ContactData from "../Contact/ContactData";
import Layout from "../Layout/layout";

function Timesection() {
  const { data } = useData();
  const choosepath = data["upcomingCourses"];

  const [click, setClick] = useState(false);
  function clicked() {
    setClick(true);
  }

  const handleContactDataSubmit = () => {
    setClick(false);
    toast.success("Thank You, Your application is successfully addded ");
  };
  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className=" w-full my-10 sm:py-10 sm:flex items-center justify-center lg:gap-16 drop-shadow-lg sm:shadow-lg sm:rounded-lg "
      >
        {/* <div className=" "> */}
        <h1 className="font-Headingfont min-w-max font-bold text-xs sm:text-sm lg:text-lg">
          Upcoming Course
        </h1>

        {click ? (
          <div className="max-w-sm px-1 mt-1">
            <ContactData onSubmit={handleContactDataSubmit} />
          </div>
        ) : (
          <div className="flex items-center mt-2  overflow-x-scroll sm:overflow-hidden justify-center space-x-3 lg:space-x-10  xl:space-x-20 ">
            {choosepath?.map((item, index) => (
              <div
                key={index}
                className=" ml-10 sm:ml-0 flex flex-col sm:first:pl-0 first:pl-20 items-center justify-center "
              >
                <div className="flex items-center justify-center ">
                  {/* Format the start_date and end_date */}
                  <p className="text-black text-xs sm:text-sm lg:text-lg   font-medium">
                    {new Date(item.start_date).toLocaleDateString()}
                  </p>{" "}
                  -{" "}
                  <p className="text-black text-xs sm:text-sm lg:text-lg   font-medium">
                    {new Date(item.end_date).toLocaleDateString()}
                  </p>
                </div>
                <button onClick={clicked}>Apply</button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </Layout>
  );
}

export default Timesection;
