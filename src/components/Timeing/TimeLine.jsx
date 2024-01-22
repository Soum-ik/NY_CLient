import Layout from "../Layout/layout";
import { useFetch } from "../../libs/paramsData";
import { useParams } from "react-router-dom";

export default function TimeLine() {
  const { id } = useParams();
  const data = useFetch(id);

  return (
    <Layout>
      <div className=" sm:px-10 py-20 sm:py-32 space-y-5 ">
        <h5 className=" headingTextSize mb-5 ">Timeline</h5>
        <h5 className=" font-textFont font-normal  tracking-widest text-[18px]">
          {data.timeline}
        </h5>
        <p className=" paragrahp">{data.timelinedic}</p>
      </div>
    </Layout>
  );
}
