import { Toaster } from "react-hot-toast";
import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";
import { Flex, Input } from "antd";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CTDesh() {
  const [ct, setCt] = useState();
  const isFormFilled = ct !== "";
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // Fetching options data from API
    const fetch = async () => {
      const res = await axios.get("http://localhost:5000/catagori");
      setTableData(res.data);
    };
    fetch();
  }, []);
  const catagorisData = (id) => {
    const fetch = async () => {
      console.log(id);
      await axios.delete(`http://localhost:5000/catagori/${id}`);
      toast.success("Successfully Delete.......");
    };
    fetch();
  };
  function handleSubmit(e) {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/catagori", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: ct,
          }),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setCt("");
          toast.success("Catagoris Added Successfully ");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Catagoris not added");
      }
    };
    fetchData();
  }

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">Catagoris</h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            <table className="w-full bg-white shadow-lg rounded mb-20">
              <thead className=" gap-20">
                <tr className=" bg-color rounded ">
                  <th className="py-2  px-5 text-left">Catagoris Name</th>

                  <th className="py-2  px-5 text-left ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData
                  ? tableData.map((item) => (
                      <tr
                        key={item._id}
                        className="hover:bg-gray-200 rounded-md "
                      >
                        <td className="p-2 text-black text-[14px]  text-left">
                          {item.name}
                        </td>

                        <td className="p-2 flex  ">
                          <button
                            onClick={() => catagorisData(item._id)}
                            className="bg-color  text-white px-3 py-1 rounded"
                          >
                            {"Delete"}
                          </button>
                        </td>
                      </tr>
                    ))
                  : "loading..."}
              </tbody>
            </table>

            {/*add text   */}
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                placeholder="Add Name"
                value={ct}
                onChange={(e) => setCt(e.target.value)}
              />

              <div className=" ">
                <button
                  onClick={handleSubmit}
                  className={`bg-color max-w-[100px] px-3 py-2 my-3 rounded-md ${
                    !isFormFilled ? "disabled opacity-80" : ""
                  }`}
                  disabled={!isFormFilled}
                >
                  Save Now
                </button>
              </div>
            </Flex>
          </div>
        </Deshboard>
      </div>
      <div>
        <Toaster position="bottom-center" />
      </div>
    </Admin>
  );
}
