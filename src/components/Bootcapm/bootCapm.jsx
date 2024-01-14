import Layout from "../Layout/layout";
import CustomData from "../CustomData";
const BootCamp = () => {
  const data = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo blanditiis veniam earum, perspiciatis unde ipsa expedita sapiente commodi minus doloribus aliquid molestiae hic iste nostrum! Explicabo sequi eos perferendis?`;
  return (
    <div className=" sm:px-10 py-8 sm:py-16 bg-gradient-to-r from-white to-slate-300/30 ">
      <Layout>
        <div className=" sm:pt-10 pt-5 ">
          <CustomData
            offer={"NEW YORK CITY"}
            heading={"Software ingeniware bootcam"}
            tittle={data}
            button={"Apply Now"}
            more={"Request"}
            customStyle={"bg-yellow-500 p-2 rounded-sm font-bold"}
            customStyleHeading={"bg-white shadow-sm p-1 sm:text-[35px] py-1"}
          />
        </div>
      </Layout>
    </div>
  );
};
export default BootCamp;
