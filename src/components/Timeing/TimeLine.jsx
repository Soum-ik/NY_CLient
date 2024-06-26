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
        // data-aos-anchor-placement="center-center"
        className="space-y-5 py-20 sm:px-10 sm:py-32"
      >
        <h5 className="mb-5 text-4xl font-semibold">Timeline</h5>
        <h5 className="  text-black opacity-90 xs:text-[18px]">
          {!data.timeline ? <Skeleton active /> : data.timeline}
        </h5>
        <p className="  mt-5  text-black opacity-70 xs:text-[18px]">
          {data.timelinedic}
        </p>
      </div>
    </Layout>
  );
}
