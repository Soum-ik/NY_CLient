/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Deshboard from "../../../../Layout/Deshboard";
import Admin from "../../../Admin/admin";
import { Flex, Input } from "antd";
const { TextArea } = Input;
import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../../../../config";
import ImageUploader from "../../../../(alloverNeed)/ImageUpload";
function EditCourse() {
  const params = useParams();
  const id = params.id;
  const navigator = useNavigate();

  const [form, setForm] = useState({
    name: "",
    buttonText: "",
    shortDetails: "",
    icon: "",
    banner: "",
    heading: "",
    cbutton: "",
    aboutImage: "",
    cdic: "",
    learndic: "",
    timeline: "",
    timelinedic: "",
    selectedOption: "",
    upcomingCourses: [
      {
        _id: "1",
        start_date: null,
        end_date: null,
      },
      {
        _id: "2",
        start_date: null,
        end_date: null,
      },
      {
        _id: "3",
        start_date: null,
        end_date: null,
      },
      {
        _id: "4",
        start_date: null,
        end_date: null,
      },
    ],
  });
  // console.log(form.upcomingCourses[0].start_date);??
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${config.apiUrl}choose/course/get/${id}`
        );
        setForm(response.data); // Use setForm to update the state
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    getData();
  }, [id]); // Include id as a dependency to re-run the effect when id changes

  const onChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  const handleIconUpload = (imageUrl) => {
    setForm({
      ...form,
      icon: imageUrl,
    });
  };

  // Function to handle banner image upload
  const handleBannerUpload = (imageUrl) => {
    setForm({
      ...form,
      banner: imageUrl,
    });
  };

  const handleAboutImageUpload = (imageUrl) => {
    setForm({
      ...form,
      aboutImage: imageUrl,
    });
  };

  // Function to handle changes in start date
  const handleStartDateChange = (index, event) => {
    const updatedForm = { ...form };
    updatedForm.upcomingCourses[index].start_date = event.target.value;
    setForm(updatedForm);
  };

  // Function to handle changes in end date
  const handleEndDateChange = (index, event) => {
    const updatedForm = { ...form };
    updatedForm.upcomingCourses[index].end_date = event.target.value;
    setForm(updatedForm);
  };
  function handleSubmit(e) {
    e.preventDefault();

    const sendingData = async () => {
      try {
        // Exclude '_id' from the form object
        const { _id, ...formData } = form;
        const response = await axios.put(
          `${config.apiUrl}choose/course/update/${_id}`,
          formData
        );

        toast.success("Successfully updated!", response);
        navigator("/courses");
      } catch (error) {
        console.error("Error updating data:", error.message);
        toast.error("Error updating data");
      }
    };

    sendingData();
  }

  return (
    <Admin>
      <div className="min-w-[1000px] overflow-auto rounded-lg shadow-2xl min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold"> Edit</h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                // placeholder={data.name}
                value={form.name}
                onChange={(e) => onChange(e, "name")}
              />
              <Input
                showCount
                maxLength={20}
                // placeholder={data.buttonText}
                value={form.buttonText}
                onChange={(e) => onChange(e, "buttonText")}
                required={true}
              />
              {/* Image uploader for Icon */}
              <ImageUploader
                text={"Upload Icon"}
                onImageUpload={(imageUrl) => handleIconUpload(imageUrl)}
              />
              <div>
                <img
                  src={form.icon}
                  className="h-[100px] w-[200px]"
                  alt="Uploaded icon"
                />
              </div>

              {/* Image uploader for banner */}
              <ImageUploader
                text={"Course Banner"}
                onImageUpload={(imageUrl) => handleBannerUpload(imageUrl)}
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

              <TextArea
                showCount
                maxLength={500}
                value={form.shortDetails}
                onChange={(e) => onChange(e, "shortDetails")}
                // placeholder={data.shortDetails}
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <hr />
              <h6 className=" text-sm">About Your Course</h6>
              <hr />
              <Input
                showCount
                maxLength={100}
                // placeholder={data.heading}
                value={form.heading}
                onChange={(e) => onChange(e, "heading")}
              />

              <Input
                showCount
                maxLength={20}
                // placeholder={data.cbutton}
                value={form.cbutton} // Updated field name
                onChange={(e) => onChange(e, "cbutton")} // Updated field name
                required={true}
              />

              <TextArea
                showCount
                maxLength={500}
                value={form.cdic} // Updated field name
                onChange={(e) => onChange(e, "cdic")} // Updated field name
                // placeholder={data.cdic}
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <ImageUploader
                text={"About Course Image"}
                onImageUpload={(imageUrl) => handleAboutImageUpload(imageUrl)}
              />
              {form.aboutImage && (
                <div>
                  <img
                    src={form.aboutImage}
                    className="h-[200px]"
                    alt="Uploaded about course image"
                  />
                </div>
              )}
              <hr />
              <h6 className="text-sm">Upcoming Courses</h6>
              <hr />
              {form.upcomingCourses?.map((course, index) => (
                <div key={course._id} className="flex gap-5">
                  <input
                    type="date"
                    value={course.start_date}
                    onChange={(event) => handleStartDateChange(index, event)}
                  />
                  <input
                    type="date"
                    value={course.end_date}
                    onChange={(event) => handleEndDateChange(index, event)}
                  />
                </div>
              ))}
              <hr />
              <h6 className=" text-sm">{"What You'll Learn"}</h6>
              <hr />
              <TextArea
                showCount
                maxLength={1000}
                value={form.learndic}
                onChange={(e) => onChange(e, "learndic")}
                // placeholder={data.learndic}
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
                maxLength={200}
                // placeholder={data.timeline}
                value={form.timeline}
                onChange={(e) => onChange(e, "timeline")}
                required={true}
              />
              <TextArea
                showCount
                maxLength={500}
                value={form.timelinedic}
                onChange={(e) => onChange(e, "timelinedic")}
                // placeholder={data.timelinedic}
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <button
                onClick={handleSubmit}
                className="bg-color max-w-[100px] px-3 py-2 my-5 rounded-md "
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

export default EditCourse;
