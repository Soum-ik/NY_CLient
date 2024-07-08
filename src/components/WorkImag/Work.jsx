import WorkImg from "../../components/WorkImag/WorkImg";
import Layout from "../Layout/layout";

const Work = () => {
  return (
    <div className="bg-gradient-to-t from-[#3d3e8f] to-red-50 py-10 sm:py-20">
      <Layout>
        <h6 className="text-center font-Poppins text-[12px]">
          RESOURCES BY ROLE
        </h6>
        <h1 className="z-50 text-center text-4xl font-semibold text-[#06074f]">
          The way we work
        </h1>

        <WorkImg />
      </Layout>
    </div>
  );
};
export default Work;
