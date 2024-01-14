 
import WorkImg from "../../components/WorkImag/WorkImg";
import Layout from "../Layout/layout";

const Work = () => {
  return (
    <div className=" bg-gradient-to-t from-red-500/30 py-10 to-red-50">
      <Layout>
        <h6 className=" text-center text-[12px] font-Poppins">
          RESOURCES BY ROLE
        </h6>
        <h1 className="  text-[33px] font-Headingfont font-bold  text-center text-red-500  z-50">
          Transform the way you work
        </h1>

        <WorkImg />
      </Layout>
    </div> 
  );
};
export default Work;
