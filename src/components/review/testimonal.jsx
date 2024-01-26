import Card from "./Card";
import Layout from "../Layout/layout";
import { useFetch } from "../../libs/choosefetchDatas";

const Testimonial = () => {
  const datas = useFetch("http://localhost:5000/customer/review");

  return (
    <Layout>
      <div className=" mt-10 sm:mt-20 sm:px-10 sm:mb-32">
        <h4 className=" text-red-500/80 font-medium">Testimonials</h4>
        <h1 className=" text-[25px] text-red-600 font-bold font-Headingfont">
          CUSTOMER <span> REVIEWS</span>
        </h1>
        <div
          className={`flex gap-8 ${
            datas.length > 3
              ? "  snap-x overflow-x-scroll"
              : " overflow-x-scroll sm:overflow-x-hidden "
          } `}
        >
          {datas.map((data) => (
            <Card
              key={data._id}
              image={data.image}
              comment={data.comment}
              name={data.name}
              role={data.role}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Testimonial;
