import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";
import { Flex, Input } from "antd";
import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../../config";

function SocialDesh() {
  const [form, setForm] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    linkedin: "",
    telegram: "",
  });
  useEffect(() => {
    const data = async () => {
      const res = await axios(`${config.apiUrl}social/links`);
      console.log(res.data[0]);
      setForm(res.data[0]);
    };
    data();
  }, []);

  const isFormFilled = Object.values(form).every((value) => value !== "");
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
          `${config.apiUrl}social/links/${_id}`,
          formData
        );
        console.log(response.data);
        toast.success("Successfully updated!");
        setForm({
          facebook: "",
          instagram: "",
          twitter: "",
          youtube: "",
          linkedin: "",
          telegram: "",
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
          <h1 className="text-[20px] pb-10 font-semibold">Social Media</h1>
          <hr className="w-full" />
          <div style={{ maxHeight: "400px" }}>
            <Flex vertical gap={32}>
              <Input
                showCount
                maxLength={100}
                placeholder="Add your facebook link"
                value={form.facebook}
                onChange={(e) => onChange(e, "facebook")}
              />
              <Input
                showCount
                maxLength={100}
                placeholder="Add your twitter link"
                value={form.twitter}
                onChange={(e) => onChange(e, "twitter")}
              />
              <Input
                showCount
                maxLength={100}
                placeholder="Add your youtube link"
                value={form.youtube}
                onChange={(e) => onChange(e, "youtube")}
              />
              <Input
                showCount
                maxLength={100}
                placeholder="Add Your linkedin link"
                value={form.linkedin}
                onChange={(e) => onChange(e, "linkedin")}
              />
              <Input
                showCount
                maxLength={100}
                placeholder="Add Your instragran link"
                value={form.instagram}
                onChange={(e) => onChange(e, "instagram")}
              />
              <Input
                showCount
                maxLength={100}
                placeholder="Add Your telegrame link"
                value={form.telegram}
                onChange={(e) => onChange(e, "telegram")}
              />

              <div className=" ">
                <button
                  onClick={handleSubmit}
                  className={`bg-color max-w-[100px] px-3 py-2 my-3 rounded-md ${
                    !isFormFilled ? "disabled opacity-75" : ""
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

export default SocialDesh;
