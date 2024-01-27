/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Deshboard from "../../../../Layout/Deshboard";
import Admin from "../../../Admin/admin";
import { Flex, Input } from "antd";
const { TextArea } = Input;
import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function EditCourse() {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `http://localhost:5000/choose/course/get/${id}`
      );
      setData(data.data);
    };
    getData();
  }, []);

  console.log(data);

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
  });

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
        const response = await axios.put(
          `http://localhost:5000/choose/course/update/${id}`,
          form
        );
        console.log(response.data);
        toast.success("Successfully updated!");
        setForm({
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
      <div className="min-w-[1000px] overflow-auto rounded-lg shadow-2xl min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">
            {" "}
            <span className=" border-b-4 ">{data.name}</span> Edit
          </h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                placeholder={data.name}
                value={form.name}
                onChange={(e) => onChange(e, "name")}
              />
              <Input
                showCount
                maxLength={20}
                placeholder={data.buttonText}
                value={form.buttonText}
                onChange={(e) => onChange(e, "buttonText")}
                required={true}
              />
              <Input
                showCount
                maxLength={50}
                placeholder={data.icon && "icon image"}
                value={form.icon}
                onChange={(e) => onChange(e, "icon")}
                required={true}
              />
              <Input
                showCount
                maxLength={50}
                placeholder={data.icon && "banner image"}
                value={form.bann}
                onChange={(e) => onChange(e, "banner")}
                required={true}
              />

              <TextArea
                showCount
                maxLength={500}
                value={form.shortDetails}
                onChange={(e) => onChange(e, "shortDetails")}
                placeholder={data.shortDetails}
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
                placeholder={data.heading}
                value={form.heading}
                onChange={(e) => onChange(e, "heading")}
              />

              <Input
                showCount
                maxLength={20}
                placeholder={data.cbutton}
                value={form.cbutton} // Updated field name
                onChange={(e) => onChange(e, "cbutton")} // Updated field name
                required={true}
              />

              <TextArea
                showCount
                maxLength={500}
                value={form.cdic} // Updated field name
                onChange={(e) => onChange(e, "cdic")} // Updated field name
                placeholder={data.cdic}
                required={true}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
              <Input
                showCount
                maxLength={50}
                placeholder={data.aboutImage}
                value={form.aboutImage}
                onChange={(e) => onChange(e, "aboutImage")}
                required={true}
              />
              <hr />
              <h6 className=" text-sm">{"What You'll Learn"}</h6>
              <hr />
              <TextArea
                showCount
                maxLength={1000}
                value={form.learndic}
                onChange={(e) => onChange(e, "learndic")}
                placeholder={data.learndic}
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
                placeholder={data.timeline}
                value={form.timeline}
                onChange={(e) => onChange(e, "timeline")}
                required={true}
              />
              <TextArea
                showCount
                maxLength={500}
                value={form.timelinedic}
                onChange={(e) => onChange(e, "timelinedic")}
                placeholder={data.timelinedic}
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
