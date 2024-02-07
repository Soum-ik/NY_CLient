import Layout from "../Layout/layout";
import { useFetch } from "../../libs/paramsData";
import { useParams } from "react-router-dom";

export default function Learn() {
  const { id } = useParams();
  // console.log(id);
  const data = useFetch(id);
  const topics = data.topics || []; // Ensure topics is an array

  const itemsPerRow = 3;

  const rows = [];
  for (let i = 0; i < topics.length; i += itemsPerRow) {
    const rowItems = topics.slice(i, i + itemsPerRow);
    rows.push(rowItems);
  }
  // const [btnClick, setBtnClick] = useState(false);
  // const colorHandler = () => {
  //   btnClick(true);

  //   alert("safasfdsaf");
  // };
  // const visiabaleForm = () => {
  //   setBtnClick(ture)
  // }
  return (
    <Layout>
      <div className="sm:px-7">
        <h1 className="headingTextSize">{`What You'll Learn`}</h1>
        <p className="paragrahp  mt-10 tracking-wide">{data.learndic}</p>
        <div className="mt-10 hidden sm:block">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-between px-10  mb-4"
            >
              {row.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  className="w-1/4 min-w-[370px] text-justify "
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
            {" "}
            Download Full Sylabus
          </a>

          <a
            href="#form"
            className="sm:px-3 px-2 sm:text-[16px] text-[14px] sm:py-3  py-2 botton"
          >
            {" "}
            Consult with our specialist
          </a>
        </div>
      </div>
    </Layout>
  );
}
