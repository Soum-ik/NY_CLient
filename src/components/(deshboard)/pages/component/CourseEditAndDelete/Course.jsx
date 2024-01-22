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
    image: "",
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
          heading: "",
          button: "",
          dic: "",
          image: " ",
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
          <h1 className="text-[20px] pb-10 font-semibold">
            {" "}
            <span className=" border-b-4 border-b-neutral-950">{id}</span> Edit
          </h1>
          <hr className="w-full" />
          <div>
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
                placeholder={data.icon}
                value={form.image}
                onChange={(e) => onChange(e, "icon")}
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

export default EditCourse;
