import Card from "./Card";
import Layout from "../Layout/layout";
import { useFetch } from "../../libs/choosefetchDatas";
// import { Carousel } from "keep-react";

const Testimonial = () => {
  const datas = useFetch("http://localhost:5000/customer/review");
 
  return (
    <Layout>
      <div className=" mt-10 sm:mt-20 sm:px-10 sm:mb-32">
        <h4 className=" text-red-500/80 font-medium">Testimonials</h4>
        <h1 className=" text-[25px] text-red-600 font-bold font-Headingfont">
          CUSTOMER <span> REVIEWS</span>
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
          {datas.map((data) => (
            // <Carousel key={data._id}>
            <Card
              key={data._id}
              image={data.image}
              comment={data.comment}
              name={data.name}
              role={data.role}
            />
            // </Carousel>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Testimonial;
