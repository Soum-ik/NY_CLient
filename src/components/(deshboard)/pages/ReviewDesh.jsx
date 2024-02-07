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

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showResetButton, setShowResetButton] = useState(false); //okey
  const tableData = useFetch(`${config.apiUrl}customer/review`);

  const handleRowSelect = (itemId) => {
    const selectedItem = tableData.find((item) => item._id === itemId);
    setForm(selectedItem);
    setSelectedItemId(itemId);
    setShowResetButton(true);
  };

  const resetForm = () => {
    setForm({
      name: "",
      image: "",
      role: "",
      comment: "",
    });
    setSelectedItemId(null);
    setShowResetButton(false);
  };

  const catagorisData = async (id) => {
    try {
      await axios.delete(`${config.apiUrl}customer-review/${id}`);
      toast.success("Successfully Deleted.......");
    } catch (error) {
      console.error("Error deleting data:", error.message);
      toast.error("Error deleting data");
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { ...formData } = form; // Destructure form object, excluding _id
      if (selectedItemId) {
        await axios.put(
          `${config.apiUrl}customer/review/${selectedItemId}`,
          formData
        );
        setSelectedItemId(null);
        setShowResetButton(false);
      } else {
        await axios.post(`${config.apiUrl}customer/review`, formData);
      }
      setForm({
        name: "",
        image: "",
        role: "",
        comment: "",
      });
      toast.success(
        selectedItemId ? "Successfully updated!" : "Successfully added!"
      );
      console.log(selectedItemId);
    } catch (error) {
      console.log(selectedItemId);
      console.error("Error updating/adding data:", error.message);
      toast.error("Error updating/adding data");
    }
  };

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
                        onClick={() => handleRowSelect(item._id)}
                      >
                        <td className="p-2 text-black text-[14px]  text-left">
                          {item.name}
                        </td>
                        <td className="p-2 text-black text-[14px]  text-left">
                          {item.comment}
                        </td>
                        <td className="p-2 flex  ">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRowSelect(item._id);
                            }}
                            className="bg-color text-white px-3 py-1 rounded mr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              catagorisData(item._id);
                            }}
                            className="bg-color text-white px-3 py-1 rounded"
                          >
                            Delete
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
                <Flex gap={8} className="flex-grow">
                  <button
                    onClick={resetForm}
                    className={`flex-grow bg-color max-w-[100px] px-3 py-2 my-3 rounded-md ${
                      showResetButton ? "" : "hidden"
                    }`}
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleSubmit}
                    className={`bg-color max-w-[100px] px-3 py-2 my-3 rounded-md`}
                  >
                    {selectedItemId ? "Update" : "Save Now"}
                  </button>
                </Flex>
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
