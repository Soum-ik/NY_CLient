import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";
import { Flex, Input } from "antd";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import ImageUploader from "../../(alloverNeed)/ImageUpload";

function ReviewDesh() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    role: "",
    comment: "",
  });

  const isFormFilled = Object.values(form).every((value) => value !== "");

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
          "http://localhost:5000/customer/review",
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
                maxLength={100}
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

export default ReviewDesh;
