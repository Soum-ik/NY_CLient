import Layout from "../Layout/layout";
import { useFetch } from "../../libs/paramsData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ContactData from "../Contact/ContactData";
import toast, { Toaster } from "react-hot-toast";

function Timesection() {
  const { id } = useParams();
  const choosepath = useFetch(id);
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
      <div className="sm:px-20 my-10 sm:py-10 sm:flex items-center justify-center gap-16 drop-shadow-lg sm:shadow-lg sm:rounded-lg ">
        <h1 className="font-Headingfont min-w-max font-bold text-[18px] sm:text-[23px]">
          Upcoming Course
        </h1>
        {click ? (
          <div className="max-w-sm px-1 mt-1">
            <ContactData onSubmit={handleContactDataSubmit} />
          </div>
        ) : (
          <div className="flex items-center mt-2  overflow-x-scroll sm:overflow-hidden justify-center space-x-20 ">
            {choosepath.upcomingCourses?.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col sm:first:pl-0 first:pl-20 items-center justify-center "
              >
                <div className="flex items-center justify-center">
                  {/* Format the start_date and end_date */}
                  <p className="text-black font-medium">
                    {new Date(item.start_date).toLocaleDateString()}
                  </p>{" "}
                  -{" "}
                  <p className="text-black font-medium">
                    {new Date(item.end_date).toLocaleDateString()}
                  </p>
                </div>
                <button onClick={clicked}>Apply</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Timesection;
