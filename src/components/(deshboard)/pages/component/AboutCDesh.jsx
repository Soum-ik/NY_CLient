import Deshboard from "../../../Layout/Deshboard";
import Admin from "../../Admin/admin";
import { Flex, Input } from "antd";
const { TextArea } = Input;
import ImageUploader from "react-image-upload";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

function HeroDesh() {
  const [form, setForm] = useState({
    heading: "",
    buttonText: "",
    dic: "",
    image: "",
  });

  const onChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  function getImageFileObject(imageFile) {
    console.log(imageFile.dataUrl);
    const image = imageFile.dataUrl;
    setForm({ ...form, image });
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const sendingData = async () => {
      try {
        const response = await axios.put(
          "http://localhost:5000/courses/about_c/65a76da2427db9fb9166ebf2",
          form
        );
        console.log(response.data);
        toast.success("Successfully updated!");
        setForm({
          heading: "",
          buttonText: "",
          dic: "",
          image: null,
        });
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
      <div className="min-w-[1000px] rounded-lg shadow-2xl min-h-screen mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">About Course Page</h1>
          <hr className="w-full" />
          <div>
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                placeholder="Name"
                value={form.heading}
                onChange={(e) => onChange(e, "heading")}
              />
              <Input
                showCount
                maxLength={20}
                placeholder="Button text"
                value={form.button}
                onChange={(e) => onChange(e, "button")}
                required={true}
              />

              <TextArea
                showCount
                maxLength={500}
                value={form.dic}
                onChange={(e) => onChange(e, "dic")}
                placeholder="Short description"
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />

              <ImageUploader
                style={{
                  width: 400,
                  resize: true,
                }}
                onFileAdded={(img) => getImageFileObject(img)}
                onFileRemoved={(img) => runAfterImageDelete(img)}
              />
              <button
                onClick={handleSubmit}
                className="bg-color max-w-[100px] px-3 py-2 rounded-md "
              >
                Save Now
              </button>
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

export default HeroDesh;
