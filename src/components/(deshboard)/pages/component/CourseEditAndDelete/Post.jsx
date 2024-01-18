import Deshboard from "../../../../Layout/Deshboard";
import Admin from "../../../Admin/admin";
import { Flex, Input } from "antd";
const { TextArea } = Input;
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../../../(alloverNeed)/ImageUpload";

function PostCourse() {
  const Navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    buttonText: "",
    shortDetails: "",
    image: "",
  });

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
          `http://localhost:5000/choose/course/`,
          form
        );
        console.log(response.data);
        setForm({
          heading: "",
          button: "",
          dic: "",
          image: " ",
        });
        toast.success("Successfully updated!");
        Navigate("/courses");
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
          <h1 className="text-[20px] pb-10 font-semibold">
            <span className="border-b-4 border-b-neutral-950"></span> Add Course
          </h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                placeholder="Add Course Name"
                value={form.name}
                onChange={(e) => onChange(e, "name")}
              />
              <Input
                showCount
                maxLength={20}
                placeholder="Add Button Name"
                value={form.buttonText}
                onChange={(e) => onChange(e, "buttonText")}
                required={true}
              />
              <TextArea
                showCount
                maxLength={500}
                value={form.shortDetails}
                onChange={(e) => onChange(e, "shortDetails")}
                placeholder="Add Course Short Details"
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <ImageUploader onImageUpload={handleImageUpload} />
              <div className=" ">
                {form.image && (
                  <div>
                    <img src={form.image} className="h-[200px]" alt="Uploaded" />
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  className="bg-color max-w-[100px] px-3 py-2 my-10 rounded-md "
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

export default PostCourse;
