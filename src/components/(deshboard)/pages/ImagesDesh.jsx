import toast, { Toaster } from "react-hot-toast";
import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";

import { useEffect, useState } from "react";
import axios from "axios";
import ImageUploader from "../../(alloverNeed)/ImageUpload";
import config from "../../../../config";

export default function ImagesDesh() {
  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${config.apiUrl}images`);
        setImages(res.data);
      } catch (error) {
        console.error("Error fetching images:", error.message);
        toast.error("Error fetching images");
      }
    };
    fetchImages();
  }, []);

  const handleImageUpload = (imageUrl, imageIndex) => {
    // Clone the images array
    const updatedImages = [...images];
    // Clone the object at the specific index
    const updatedImageObj = { ...updatedImages[imageIndex] };
    // Update the cloned object with the new image URL
    updatedImageObj.image = imageUrl;
    // Update the cloned images array with the modified object
    updatedImages[imageIndex] = updatedImageObj;
    // Set the state with the updated array
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming you have an _id field in each image object
      // Loop through the images array and send an individual PUT request for each image
      for (const image of images) {
        const { _id, ...rest } = image;
        await axios.put(`${config.apiUrl}/images/${_id}`, rest);
      }
      toast.success("Successfully updated!");
      navigator("/courses");
    } catch (error) {
      console.error("Error updating data:", error.message);
      toast.error("Error updating data");
    }
  };
  

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">Images</h1>
          <hr className="w-full" />

          <div
            className="grid grid-cols-3 gap-10 mb-10"
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
            type="submit"
            className=" bg-color px-3 py-2 rounded-md"
          >
            Submit
          </button>
        </Deshboard>
      </div>
      <div>
        <Toaster position="bottom-center" />
      </div>
    </Admin>
  );
}
