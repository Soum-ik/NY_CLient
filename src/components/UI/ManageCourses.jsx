import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useFetch } from "../../libs/choosefetchDatas";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageServiceTable = () => {
  const [loading, setLoading] = useState(false);
  const data = useFetch("http://localhost:5000/choosepath");
  console.log(data);
  const courseDelate = (id) => {
    const fetch = async () => {
      setLoading(true);
      console.log(id);
      await axios.delete(`http://localhost:5000/choose/course/${id}`);
      toast.success("Successfully Delete.......");
      setLoading(false);
    };
    fetch();
  };

  return (
    <div className=" overflow-auto sm:max-w-[1100px] min-w-[1050px] lg:p-6 md:p-6 p-4 rounded-xl border shadow-2xl font-Poppins min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl text-black">Courses</h1>
        <button
          className=" flex justify-center items-center gap-2"
          type="link"
          onClick={() => console.log("Navigate to add service")}
        >
          <Link to={"/courses/post"}>
            <PlusOutlined /> Add New Service{" "}
          </Link>
        </button>
      </div>
      <hr />
      <div className=" max-h-[500px] overflow-auto">
        <table className="w-full  shadow-lg rounded">
          <thead className=" gap-20">
            <tr className=" bg-color rounded ">
              <th className="py-2  px-5 text-center ">Image</th>
              <th className="py-2  px-5 text-center ">Course Name</th>
              <th className="py-2  px-5 text-center ">Short Description</th>
              <th className="py-2  px-5 text-center ">Button</th>
              <th className="py-2  px-5 text-center ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-200 rounded-md">
                    <td className="p-2  text-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="p-2 text-black text-[14px]  text-center">
                      {item.name}
                    </td>
                    <td className="p-2 text-black text-[14px]  text-center">
                      {item.buttonText}
                    </td>
                    <td className="p-2 text-black text-[14px] max-w-md  text-center">
                      {item.shortDetails.split(" ").slice(0, 15).join(" ")}...
                    </td>
                    <td className="p-2 flex  text-center">
                      <button className="bg-green-700 text-white px-3 py-1 mr-2 rounded">
                        <Link to={`/courses/edit/${item._id}`}>Edit</Link>
                      </button>
                      <button
                        onClick={() => courseDelate(item._id)}
                        className="bg-color text-white px-3 py-1 rounded"
                      >
                        {loading ? "loading...." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              : "loading..."}
          </tbody>
        </table>
      </div>
      <div>
        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default ManageServiceTable;
