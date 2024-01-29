import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";
import { Flex, Input } from "antd";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import ImageUploader from "../../(alloverNeed)/ImageUpload";
import { useFetch } from "../../../libs/choosefetchDatas";
import config from "../../../../config";

function ReviewDesh() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    role: "",
    comment: "",
  });

  // const isFormFilled = Object.values(form).every((value) => value !== "");
  const tableData = useFetch(`${config.apiUrl}customer/review`);
  const catagorisData = (id) => {
    const fetch = async () => {
      console.log(id);
      await axios.delete(`${config.apiUrl}customer-review/${id}`);
      toast.success("Successfully Delete.......");
    };
    fetch();
  };
  const handleImageUpload = (imageUrl) => {
    setForm({
      ...form,
      image: imageUrl,
    });
  };

  const onChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const sendingData = async () => {
      try {
        const response = await axios.post(
          `${config.apiUrl}customer/review`,
          form
        );
        setForm({
          name: "",
          image: "",
          role: "",
          comment: "",
        });
        console.log(response.data);
        toast.success("Successfully updated!");
        // setLoading(false);
      } catch (error) {
        console.error("Error updating data:", error.message);

        toast.error("Error updating data");
      }
    };
    sendingData();
  }

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">Customer Review</h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            <table className="w-full bg-white shadow-lg rounded mb-20">
              <thead className=" gap-20">
                <tr className=" bg-color rounded ">
                  <th className="py-2  px-5 text-left">Name</th>
                  <th className="py-2  px-5 text-left">Text</th>

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
                        <td className="p-2 text-black text-[14px]  text-left">
                          {item.comment}
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
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                placeholder="Add Name"
                value={form.name}
                onChange={(e) => onChange(e, "name")}
              />
              <Input
                showCount
                maxLength={100}
                placeholder="Add Role"
                value={form.role}
                onChange={(e) => onChange(e, "role")}
              />
              <Input
                showCount
                maxLength={1000}
                placeholder="Add Comment"
                value={form.comment}
                onChange={(e) => onChange(e, "comment")}
              />

              <ImageUploader onImageUpload={handleImageUpload} />
              <div className=" ">
                {form.image && (
                  <div>
                    <img
                      src={form.image}
                      className="h-[200px]"
                      alt="Uploaded"
                    />
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  className={`bg-color max-w-[100px] px-3 py-2 my-3 rounded-md  `}
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

export default ReviewDesh;
