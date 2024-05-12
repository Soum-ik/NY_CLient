import Layout from "../../Layout/layout";
import AdminNav from "../../Navbar/adminNav";
import SideBar from "../../(alloverNeed)/SideBar";
import { useEffect } from "react";
import { useFetch } from "../../../libs/choosefetchDatas";
import config from "../../../../config";
// eslint-disable-next-line react/prop-types
export default function Admin({ children }) {
  const Courses = useFetch(`${config.apiUrl}choosepath`);
  const cetagori = useFetch(`${config.apiUrl}catagori`);
  const apply = useFetch(`${config.apiUrl}application`);
  const review = useFetch(`${config.apiUrl}customer/review`);
  
  
    

  return (
    <div className=" bg-white/5 ">
      <Layout>
        <AdminNav />
        <div className="min-h-[1000px] flex items-start justify-center gap-10 fixed">
          <SideBar />
          <div className=" mt-10 max-w-xl">
            {children || (
              <div className=" w-full min-h-[50vh] mt-16 mx-10">
                <h1 className=" text-3xl">Welcome To Deshboard</h1>
                <div className=" grid grid-cols-3 gap-3">
                  <div className=" max-w-[200px] py-3  px-10 flex flex-col items-center text-center  border mt-10">
                    <h1 className=" text-xl">Total Course</h1>
                    <p className=" font-bold">{Courses.length}</p>
                  </div>
                  <div className=" max-w-[200px] py-3  px-10 flex flex-col items-center text-center  border mt-10">
                    <h1 className=" text-xl">Total Categori</h1>
                    <p className=" font-bold">{cetagori.length}</p>
                  </div>
                  <div className=" max-w-[200px] py-3  px-10 flex flex-col items-center text-center  border mt-10">
                    <h1 className=" text-xl">Applied Student</h1>
                    <p className=" font-bold">{apply.length}</p>
                  </div>
                  <div className=" max-w-[200px] py-3  px-10 flex flex-col items-center text-center  border mt-10">
                    <h1 className=" text-xl">Customer Review</h1>
                    <p className=" font-bold">{review.length}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}
