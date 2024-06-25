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
        className="my-10 w-full items-center justify-center drop-shadow-lg sm:flex sm:rounded-lg sm:py-10 sm:shadow-lg lg:gap-16"
      >
        {/* <div className=" "> */}
        <h1 className="min-w-max text-xs font-semibold sm:text-sm lg:text-lg">
          Upcoming Course
        </h1>

        {click ? (
          <div className="mt-1 max-w-sm px-1">
            <ContactData onSubmit={handleContactDataSubmit} />
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-center space-x-3 overflow-x-scroll sm:overflow-hidden lg:space-x-10 xl:space-x-20">
            {choosepath?.map((item, index) => (
              <div
                key={index}
                className="ml-10 flex flex-col items-center justify-center first:pl-20 sm:ml-0 sm:first:pl-0"
              >
                <div className="flex items-center justify-center">
                  {/* Format the start_date and end_date */}
                  <p className="text-xs font-medium text-black sm:text-sm lg:text-lg">
                    {new Date(item.start_date).toLocaleDateString()}
                  </p>{" "}
                  -{" "}
                  <p className="text-xs font-medium text-black sm:text-sm lg:text-lg">
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
