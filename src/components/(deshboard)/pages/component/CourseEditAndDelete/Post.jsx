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
    icon: "",
    banner: "",
    heading: "", // Updated field name
    cbutton: "", // Updated field name
    cdic: "", // Updated field name
    learndic: "",
    timeline: "",
    timelinedic: "",
  });
  console.log(form);

  const isFormFilled = Object.values(form).every((value) => value !== "");

  const handleIconUpload = (imageUrl) => {
    setForm({
      ...form,
      icon: imageUrl,
    });
  };

  const handleBannerUpload = (imageUrl) => {
    setForm({
      ...form,
      banner: imageUrl,
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
          name: "",
          buttonText: "",
          shortDetails: "",
          icon: "",
          banner: "",
          heading: "", // Updated field name
          cbutton: "", // Updated field name
          cdic: "", // Updated field name
          learndic: "",
          timeline: "",
          timelinedic: "",
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
              {/* ImageUploader for course icon */}
              <ImageUploader
                text={"Course Icon"}
                onImageUpload={handleIconUpload}
              />
              {form.icon && (
                <div>
                  <img
                    src={form.icon}
                    className="h-[200px]"
                    alt="Uploaded Icon"
                  />
                </div>
              )}
              {/* ImageUploader for course banner */}
              <ImageUploader
                text={"Course Banner"}
                onImageUpload={handleBannerUpload}
              />
              {form.banner && (
                <div>
                  <img
                    src={form.banner}
                    className="h-[200px]"
                    alt="Uploaded Banner"
                  />
                </div>
              )}
              <hr />
              <h6 className=" text-sm">About Your Course</h6>
              <hr />
              <Input
                showCount
                maxLength={100}
                placeholder="Course Heading"
                value={form.heading}
                onChange={(e) => onChange(e, "heading")}
              />

              <Input
                showCount
                maxLength={20}
                placeholder="Course Button"
                value={form.cbutton} // Updated field name
                onChange={(e) => onChange(e, "cbutton")} // Updated field name
                required={true}
              />

              <TextArea
                showCount
                maxLength={500}
                value={form.cdic} // Updated field name
                onChange={(e) => onChange(e, "cdic")} // Updated field name
                placeholder="Course description"
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />

              <hr />
              <h6 className=" text-sm">{"What You'll Learn"}</h6>
              <hr />
              <TextArea
                showCount
                maxLength={1000}
                value={form.learndic}
                onChange={(e) => onChange(e, "learndic")}
                placeholder="What You'll Learn...."
                required={true}
                style={{
                  height: 200,
                  resize: "none",
                }}
              />
              <hr />
              <h6 className=" text-sm">{"Timeline"}</h6>
              <hr />
              <Input
                showCount
                maxLength={20}
                placeholder="Our QA Training Progrma last 15 weeks"
                value={form.timeline}
                onChange={(e) => onChange(e, "timeline")}
                required={true}
              />
              <TextArea
                showCount
                maxLength={500}
                value={form.timelinedic}
                onChange={(e) => onChange(e, "timelinedic")}
                placeholder="The Job Placement Assistance Program..........."
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <button
                onClick={handleSubmit}
                className={`bg-color max-w-[100px] px-3 py-2 my-3 rounded-md ${
                  !isFormFilled ? "disabled opacity-80" : ""
                }`}
                disabled={!isFormFilled}
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

export default PostCourse;
