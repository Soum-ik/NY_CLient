import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";
import { Flex } from "antd";
import { useEffect, useState } from "react";
import ImageUploader from "../../(alloverNeed)/ImageUpload";

import toast, { Toaster } from "react-hot-toast";
import config from "../../../../config";
import axios from "axios";

function BannerDesh() {
  const [Image, setImage] = useState("");
  const isFormFilled = Image !== "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`${config.apiUrl}about/banner`);
        console.log(res.data[0].Image);
        setImage(res.data[0].Image);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error fetching image");
      }
    };
    fetchData();
  }, []);
  // Function to handle image upload
  const handleImageUpload = (imageUrl) => {
    console.log(imageUrl);
    setImage(imageUrl);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(Image);
    const updateImage = async () => {
      try {
        const response = await fetch(
          `${config.apiUrl}about/banner/65c30914e5485a2a8effc763`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Image: Image,
            }),
          }
        );

        if (response.ok) {
          setImage(""); // Clearing the image state after successful upload
          console.log(Image);
          toast.success("Image Uploaded Successfully");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error uploading image");
      }
    };

    updateImage();
  }

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">About Banner</h1>
          <div style={{ maxHeight: "400px" }}>
            <Flex vertical gap={32}>
              <ImageUploader onImageUpload={handleImageUpload} />
              <div className=" ">
                {Image && (
                  <div>
                    <img src={Image} className="h-[200px]" alt="Uploaded" />
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
                <Toaster position="top-center"></Toaster>
              </div>
            </Flex>
          </div>
        </Deshboard>
      </div>
    </Admin>
  );
}

export default BannerDesh;
