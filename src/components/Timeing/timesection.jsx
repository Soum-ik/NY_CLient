import Layout from "../Layout/layout";
import { useFetch } from "../../libs/paramsData";
import { useParams } from "react-router-dom";

function Timesection() {
  const { id } = useParams();
  const choosepath = useFetch(id);

  return (
    <Layout>
      <div className="sm:px-20 my-10 sm:py-10 sm:flex items-center justify-center gap-20 drop-shadow-lg shadow-lg rounded-lg hidden">
        <h1 className="font-Headingfont min-w-max font-bold text-[18px] sm:text-[23px]">
          Upcoming Courses
        </h1>
        <div className="flex items-center justify-center space-x-20 gap-10">
          {choosepath.upcomingCourses?.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col items-center justify-center "
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
              <button>Apply</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Timesection;
