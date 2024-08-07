import Card from "./Card";
import Layout from "../Layout/layout";
import { useFetch } from "../../libs/choosefetchDatas";
import config from "../../../config";

const Testimonial = () => {
  const datas = useFetch(`${config.apiUrl}customer/review`);
  console.log(datas);
  return (
    <Layout>
      <div className=" mt-10 sm:mt-16 sm:px-10 sm:mb-16">
        <h4 className=" text-red-500/80 font-medium">Testimonials</h4>
        <h1 className=" text-[25px] text-red-600 uppercase font-Headingfont font-bold">
          Student<span className=" md:ml-3">Feedback </span>
        </h1>
        <div
          data-aos-duration="500"
          data-aos="fade-up"
          // data-aos-anchor-placement="center-center"
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
