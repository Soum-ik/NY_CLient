import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";
import { Flex } from "antd";
import { useState } from "react";
import ImageUploader from "../../(alloverNeed)/ImageUpload";

import toast, { Toaster } from "react-hot-toast";
import config from "../../../../config";

function BannerDesh() {
  const [img, setImg] = useState("");
  const isFormFilled = img !== "";

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting with Image:", img);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.apiUrl}about/banner/65aac77f3d16a53705b79199`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              img: img,
            }),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setImg("");
          toast.success("Image Upload Successfully");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error uploading image");
      }
    };

    fetchData();
  }

  const handleImageUpload = (imageUrl) => {
    setImg(imageUrl);
  };

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">About Banner</h1>
          <div style={{ maxHeight: "400px" }}>
            <Flex vertical gap={32}>
              <ImageUploader onImageUpload={handleImageUpload} />
              <div className=" ">
                {img && (
                  <div>
                    <img src={img} className="h-[200px]" alt="Uploaded" />
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
