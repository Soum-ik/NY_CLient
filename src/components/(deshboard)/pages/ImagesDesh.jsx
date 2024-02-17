import toast, { Toaster } from "react-hot-toast";
import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";

import { useEffect, useState } from "react";
import axios from "axios";
import ImageUploader from "../../(alloverNeed)/ImageUpload";
import config from "../../../../config";

export default function CTDesh() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${config.apiUrl}images`);
      setImages(res.data);
    };
    fetch();
  }, []);

  const handleImageUpload = (imageUrl, imageIndex) => {
    const updatedImages = [...images];
    const updatedImageObj = { ...updatedImages[imageIndex] };
    updatedImageObj.image = imageUrl;
    updatedImages[imageIndex] = updatedImageObj;
    setImages(updatedImages);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const sendingData = async () => {
      try {
        const response = await axios.put(
          `${config.apiUrl}images`,
          { images: images } // Pass the updated images array to the server
        );

        toast.success("Successfully updated!", response);
        // You might want to redirect or do something else upon successful update
      } catch (error) {
        console.error("Error updating data:", error);
        toast.error("Error updating data");
      }
    };

    sendingData();
  }

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">Images</h1>
          <hr className="w-full" />
          <div
            className=" grid grid-cols-3 gap-10"
            style={{ maxHeight: "400px" }}
          >
            {images.map((imageObj, index) => (
              <div key={index}>
                <ImageUploader
                  text={"image"}
                  onImageUpload={(imageUrl) =>
                    handleImageUpload(imageUrl, index)
                  }
                />
                <img
                  src={imageObj.image}
                  className="h-[100px]"
                  alt="Uploaded Banner"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-color max-w-[100px] px-3 py-2 my-5 rounded-md "
          >
            Save Now
          </button>
        </Deshboard>
      </div>
      <div>
        <Toaster position="bottom-center" />
      </div>
    </Admin>
  );
}
