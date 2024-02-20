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
      <div className="sm:px-7">
        <h1 className="headingTextSize">{`What You'll Learn`}</h1>
        <div className="paragrahp  mt-10 tracking-wide">
          {!data.learndic ? <Skeleton /> : data.learndic}
        </div>
        <div className="mt-10 hidden sm:block">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-between px-10  mb-4"
            >
              {row.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  className="w-1/4 line-clamp-5  ease-in-out delay-200 min-w-[370px] text-justify "
                >
                  <li className="">{topic}</li>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-3 sm:gap-10 mt-10">
          <a
            href="#form"
            className="sm:px-3 px-2 sm:text-[16px] text-[14px] sm:py-3  py-2 botton"
          >
            Download Full Sylabus
          </a>

          <a
            href={data.link}
            target="_blank"
            className="sm:px-3 px-2 sm:text-[16px] text-[14px] sm:py-3  py-2 botton"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </Layout>
  );
}
