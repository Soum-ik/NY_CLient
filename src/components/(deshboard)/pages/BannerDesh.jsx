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
  const [image2, setImage2] = useState("");
  const isFormFilled = Image !== "";

  console.log("image2", image2);
  console.log("image1", Image);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`${config.apiUrl}about/banner`);

        setImage(res.data[0].Image);
        setImage2(res.data[1].Image);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error fetching image");
      }
    };
    fetchData();
  }, []);
  const handleImageUpload = (imageUrl) => {
    setImage(imageUrl);
  };
  const handleImageUpload2 = (imageUrl) => {
    setImage2(imageUrl);
  };

  function handleSubmit(e, data) {
    console.log(data);
    e.preventDefault();
    let imageBody;
    if (data == "65c30914e5485a2a8effc763") {
      imageBody = Image;
    }
    if (data == "66579a9d99e81969774124da") {
      imageBody = image2;
    }
    const updateImage = async () => {
      try {
        const response = await fetch(`${config.apiUrl}about/banner/${data}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Image: imageBody,
          }),
        });

        if (response.ok) {
          setImage(""); // Clearing the image state after successful upload

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
                  onClick={(e) => handleSubmit(e, "65c30914e5485a2a8effc763")}
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

            <p className=" mt-10 text-xl font-semibold">Contact Image</p>
            <Flex vertical gap={32}>
              <ImageUploader onImageUpload={handleImageUpload2} />
              <div className=" ">
                {image2 && (
                  <div>
                    <img src={image2} className="h-[200px]" alt="Uploaded" />
                  </div>
                )}
                <button
                  onClick={(e) => handleSubmit(e, "66579a9d99e81969774124da")}
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
