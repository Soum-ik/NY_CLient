import Deshboard from "../../../../Layout/Deshboard";
import Admin from "../../../Admin/admin";
import { Flex, Input} from "antd";
const { TextArea } = Input;
import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../../../(alloverNeed)/ImageUpload";
import config from "../../../../../../config";

function PostCourse() {
  // Hooks for state management
  const Navigate = useNavigate();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    // Fetching options data from API
    const fetch = async () => {
      const res = await axios.get(`${config.apiUrl}catagori`);
      setOptions(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  // Form state to manage various input fields
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
    topics: [], // Added selectedOption to the form state
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
  console.log(form);

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
  const [newTopic, setNewTopic] = useState("");
  const addTopic = () => {
    if (newTopic.trim() !== "") {
      setForm({
        ...form,
        topics: [...form.topics, newTopic],
      });
      setNewTopic("");
    }
  };

  const removeTopic = (index) => {
    const updatedTopics = [...form.topics];
    updatedTopics.splice(index, 1);
    setForm({
      ...form,
      topics: updatedTopics,
    });
  };

  // Function to check if all form fields are filled
  const isFormFilled = Object.values(form).every((value) => value !== "");

  // Function to handle icon image upload
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

  // Function to handle input field changes
  const onChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const sendingData = async () => {
      try {
        // Sending form data to the server
        const response = await axios.post(
          `${config.apiUrl}choose/course/`,
          form
        );
        console.log(response.data);

        // Resetting form fields after successful submission
        setForm({
          name: "",
          buttonText: "",
          shortDetails: "",
          icon: "",
          banner: "",
          heading: "",
          cbutton: "",
          cdic: "",
          aboutImage: "",
          learndic: "",
          timeline: "",
          timelinedic: "",
          selectedOption: "", // Reset selectedOption after form submission
        });

        // Displaying success message
        toast.success("Successfully updated!");

        // Navigating to the courses page
        Navigate("/courses");
      } catch (error) {
        console.error("Error updating data:", error.message);
        // Displaying error message if submission fails
        toast.error("Error updating data");
      }
    };
    sendingData();
  };

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <div className=" flex items-center pb-10 justify-between">
            <h1 className="text-[20px] font-semibold">Add Course</h1>

            {/* Dropdown to select an option */}
            <select
              value={form.selectedOption}
              onChange={(e) => onChange(e, "selectedOption")}
            >
              {options.map((option) => (
                <option key={option._id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            {/* Form input fields */}
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={200}
                placeholder="Add Course Name"
                value={form.name}
                onChange={(e) => onChange(e, "name")}
              />
              <Input
                showCount
                maxLength={50}
                placeholder="Add Button Name"
                value={form.buttonText}
                onChange={(e) => onChange(e, "buttonText")}
                required={true}
              />
              <TextArea
                showCount
                maxLength={2000}
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
                maxLength={200}
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
                maxLength={2000}
                value={form.cdic} // Updated field name
                onChange={(e) => onChange(e, "cdic")} // Updated field name
                placeholder="Course description"
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <ImageUploader
                text={"About Course Image"}
                onImageUpload={handleAboutImageUpload}
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
                maxLength={2000}
                value={form.learndic}
                onChange={(e) => onChange(e, "learndic")}
                placeholder="What You'll Learn...."
                required={true}
                style={{
                  height: 200,
                  resize: "none",
                }}
              />
              <div>
                <Input
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  placeholder="Add bullet point text"
                />
                <button onClick={addTopic} className=" border p-1 rounded mt-3">
                  Add text
                </button>
                <ul>
                  {form.topics.map((topic, index) => (
                    <div key={index} className=" flex items-center ">
                      <li className=" line-clamp-1 text-black/60 ">{topic} </li>
                      <button
                        className=" ml-5 border p-1 rounded"
                        onClick={() => removeTopic(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
              <hr />
              <h6 className=" text-sm">{"Timeline"}</h6>
              <hr />
              <Input
                showCount
                maxLength={2000}
                placeholder="Our QA Training Progrma last 15 weeks"
                value={form.timeline}
                onChange={(e) => onChange(e, "timeline")}
                required={true}
              />
              <TextArea
                showCount
                maxLength={2000}
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
        {/* Toaster for displaying notifications */}
        <Toaster position="bottom-center" />
      </div>
    </Admin>
  );
}

export default PostCourse;
