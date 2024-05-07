import Layout from "../Layout/layout";
import { Skeleton } from "antd";
import { useData } from "../../Context/Context-api";

export default function TimeLine() {
  const { data } = useData();

  return (
    <Layout>
      <div
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className=" sm:px-10 py-20 sm:py-32 space-y-5 "
      >
        <h5 className=" headingTextSize mb-5 ">Timeline</h5>
        <h5 className=" -tracking-tighter xs:text-[18px] text-[13px]">
          {!data.timeline ? <Skeleton active /> : data.timeline}
        </h5>
        <p className=" paragrahp ">{data.timelinedic}</p>
      </div>
    </Layout>
  );
}
