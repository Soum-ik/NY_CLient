import Layout from "../Layout/layout";
import CustomData from "../CustomData";
import { Skeleton } from "antd";
import { useData } from "../../Context/Context-api";

const BootCamp = () => {
  const { data } = useData();

  return (
    <div className=" sm:px-10 py-8 sm:py-16 bg-gradient-to-r from-white to-slate-300/30 ">
      <Layout>
        <div className=" sm:pt-10 pt-5 flex sm:flex-row flex-col  items-start sm:items-center  gap-10">
          {data.name ? (
            <CustomData
              offer={"Online Class"}
              heading={data.name}
              tittle={data.shortDetails}
              button={"Apply Now"}
              more={"Request"}
              forYellow={"bg-yellow-500 p-2 rounded-sm font-bold"}
              customStyleHeading={" sm:text-[35px] py-1"}
            />
          ) : (
            <Skeleton
              active
              className="w-[550px] flex items-center justify-center h-[400px]"
            />
          )}
          {!data.banner ? (
            <Skeleton.Image active className=" min-w-[550px] min-h-[400px]" />
          ) : (
            <img
              className="w-[550px]  h-[400px]  rounded-2xl "
              src={data.banner}
              alt=""
            />
          )}
        </div>
      </Layout>
    </div>
  );
};
export default BootCamp;
