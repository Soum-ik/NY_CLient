/* eslint-disable react/jsx-no-target-blank */
import Layout from "../Layout/layout";
import { Skeleton } from "antd";
import { useData } from "../../Context/Context-api";

export default function Learn() {
  const { data } = useData();

  const topics = data.topics || []; // Ensure topics is an array

  const itemsPerRow = 3;

  const rows = [];
  for (let i = 0; i < topics.length; i += itemsPerRow) {
    const rowItems = topics.slice(i, i + itemsPerRow);
    rows.push(rowItems);
  }

  return (
    <Layout>
      <div data-aos-duration="1000" data-aos="fade-up" className="sm:px-7">
        <h1 className="text-4xl font-semibold">{`What You'll Learn`}</h1>
        <div className="   mt-10 opacity-80 tracking-wide">
          {!data.learndic ? <Skeleton /> : data.learndic}
        </div>
        <div className="mt-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 md:px-10 lg:grid-cols-3"
            >
              {row.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  className="mb-2 line-clamp-5 w-1/4 min-w-[370px] text-justify delay-200 ease-in-out"
                >
                  <li className="">{topic}</li>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-3 sm:gap-10">
          <a
            href="#form"
            className="botton px-2 py-2 text-[14px] sm:px-3 sm:py-3 sm:text-[16px]"
          >
            Download Full Sylabus
          </a>

          <a
            href={data.link}
            target="_blank"
            className="botton px-2 py-2 text-[14px] sm:px-3 sm:py-3 sm:text-[16px]"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </Layout>
  );
}
