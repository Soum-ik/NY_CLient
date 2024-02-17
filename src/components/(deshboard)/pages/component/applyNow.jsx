import Admin from "../../Admin/admin";
import DeshBorad from "../../../Layout/Deshboard";
import config from "../../../../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const ApplyNow = () => {
  const [data, setData] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (index) => {
    setExpandedItems((prevExpanded) => {
      if (prevExpanded.includes(index)) {
        return prevExpanded.filter((item) => item !== index);
      } else {
        return [...prevExpanded, index];
      }
    });
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(config.apiUrl + "application");
      setData(data.data);
    };
    getData();
  }, []);

  const deleteApplicationInformation = async (index) => {
    const response = await axios.delete(config.apiUrl + "application/" + index);
    console.log(response);
    window.location.reload();
    if (response) {
      toast.success("Successfully delete!");
    } else {
      toast.error("Message not be a delete");
    }
  };

  const information = data.reverse();

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max ">
        <DeshBorad>
          {/* <h1> Request Form Infomation</h1> */}
          <div
            className=" mb-20 grid grid-cols-3 gap-3 mt-10"
            style={{ maxHeight: "400px" }}
          >
            {information.map((item, index) => (
              <div
                className="relative border max-w-[
                  300px] rounded-md p-2"
                key={index}
              >
                <div className=" max-w-sm">
                  <h1 className=" text-xl  uppercase">{item.name}</h1>
                  <h5 className="     my-1 text-black/90">{item.email}</h5>

                  <p className="">{item.number}</p>
                  <p className="text-sm">{item.date}--{item.time}</p>

                  <p
                    key={index}
                    className={`mt-2 text-sm text-black/80  ${
                      expandedItems.includes(index)
                        ? "line-clamp-6"
                        : "line-clamp-none"
                    }`}
                    onClick={() => toggleExpand(index)}
                  >
                    {item.message}
                  </p>
                  <span onClick={() => deleteApplicationInformation(item._id)}>
                    <MdDeleteForever
                      color="red"
                      size={20}
                      className="cursor-pointer  rounded-lg absolute top-2 right-3"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DeshBorad>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </Admin>
  );
};
export default ApplyNow;
