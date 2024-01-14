import Layout from "../Layout/layout";
import { useFetch } from "../../libs/choosefetchDatas";

function Timesection() {
  const upcomingCourses = useFetch(
    "http://localhost:5000/course/upcommingTime"
  );
  return (
    <Layout>
      <div className="sm:px-20 my-10 sm:py-10 sm:flex items-center justify-center gap-20  drop-shadow-lg shadow-lg rounded-lg hidden">
        <h1 className=" font-Headingfont font-bold text-[18px] sm:text-[23px]">
          Upcoming courses
        </h1>
        <div className=" flex items-center justify-center space-x-20 gap-10">
          {upcomingCourses.map((course, index) => (
            <div
              key={index}
              className=" flex items-center justify-center flex-col"
            >
              <h2>{course.course_name}</h2>
              <div className=" flex items-center justify-center gap-3">
                <p className=" text-black font-medium"> {course.start_date}</p>-
                <p className="text-black font-medium"> {course.end_date}</p>
              </div>
              <button className=" border-b-2">{course.action}</button>
            </div>
          ))}
        </div>
        <button className=" border-b-2 border-blue-500 ">More dates</button>
      </div>
    </Layout>
  );
}

export default Timesection;
