import WorkImg from "../../components/WorkImag/WorkImg";
import Layout from "../Layout/layout";

const Work = () => {
  return (
    <div className=" bg-gradient-to-t from-[#3d3e8f] py-10 sm:py-20 to-red-50">
      <Layout>
        <h6 className=" text-center text-[12px] font-Poppins">
          RESOURCES BY ROLE
        </h6>
        <h1 className="text-[33px] font-Headingfont font-bold text-center text-[#06074f] z-50">
          The way we work
        </h1>

        <WorkImg />
      </Layout>
    </div>
  );
};
export default Work;
