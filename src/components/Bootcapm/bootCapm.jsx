import Layout from "../Layout/layout";
import { useParams } from "react-router-dom";
import CustomData from "../CustomData";
import { useFetch } from "../../libs/paramsData";

const BootCamp = () => {
  const { id } = useParams();
 
  const data = useFetch(id);
 
  return (
    <div className=" sm:px-10 py-8 sm:py-16 bg-gradient-to-r from-white to-slate-300/30 ">
      <Layout>
        <div className=" sm:pt-10 pt-5 flex sm:flex-row flex-col items-center  gap-10">
          <CustomData
            offer={"Online Class"}
            heading={data.name || "Software Ingerninner BootCampe"}
            tittle={data.shortDetails}
            button={"Apply Now"}
            more={"Request"}
            customStyle={"bg-yellow-500 p-2 rounded-sm font-bold"}
            customStyleHeading={"bg-white shadow-sm p-1 sm:text-[35px] py-1"}
          />
          <img
            className=" w-[550px] h-[400px] object-cover rounded-md"
            src={data.banner}
            alt=""
          />
        </div>
      </Layout>
    </div>
  );
};
export default BootCamp;
