import Deshboard from "../../../Layout/Deshboard";
import Admin from "../../Admin/admin";
import { Flex, Input } from "antd";
import ImageUploader from "../../../(alloverNeed)/ImageUpload";
import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../../../config";
const { TextArea } = Input;

function HeroDesh() {
  const [form, setForm] = useState({
    heading: "",
    button: "",
    dic: "",
    image: "",
  });

  useEffect(() => {
    const data = async () => {
      const res = await axios(`${config.apiUrl}hero`);
      console.log(res.data[0]);
      setForm(res.data[0]);
    };
    data();
  }, []);
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
        const { _id, ...formData } = form;
        const response = await axios.put(
          `${config.apiUrl}hero/${_id}`,
          formData
        );
        console.log(response.data);
        toast.success("Successfully updated!");
        setForm({
          heading: "",
          button: "",
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
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">
            <span className="border-b-4 border-b-neutral-950"></span> Hero
            Component
          </h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
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
                maxLength={2000}
                value={form.dic}
                onChange={(e) => onChange(e, "dic")}
                placeholder="Short description"
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

export default HeroDesh;
