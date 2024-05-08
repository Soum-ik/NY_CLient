import toast, { Toaster } from "react-hot-toast";
import Deshboard from "../../../components/Layout/Deshboard";
import Admin from "../Admin/admin";

import { useEffect, useState } from "react";
import axios from "axios";
import ImageUploader from "../../(alloverNeed)/ImageUpload";
import config from "../../../../config";

export default function LogoDesh() {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${config.apiUrl}logo`);
      setImage(data[0]);
    };
    getData();
  }, []);

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (imageUrl) => {
    setImage({
      ...image,
      image: imageUrl,
    });
  };

  const handleSubmit = async () => {
    setLoading(true)
    const { data } = await axios.put(`${config.apiUrl}logo/edit`, image);
    console.log(data);
    if (data.data === "Updated") {
      toast.success("Updated");
      setLoading(false)
    } else {
      toast.error("Something went wrong");
      setLoading(false)
    }
  };

  return (
    <Admin>
      <div className="min-w-[1000px] rounded-lg shadow-2xl overflow-auto min-h-max mt-11 px-5 py-4">
        <Deshboard>
          <h1 className="text-[20px] pb-10 font-semibold">
            Company logo <br />
          </h1>
          {/* <h2>If try to change image please change all at a time </h2> */}
          <hr className="w-full" />
          <div className=" max-h-[50vh] overflow-y-scroll">
            <ImageUploader onImageUpload={handleImageUpload} />
            <img
              src={image.image}
              className=" w-full object-cover h-[300px]"
              alt="Uploaded Banner"
            />
            <button
            disabled={loading}
              onClick={() => handleSubmit()}
              className="disabled:bg-red-400 bg-color max-w-[100px] px-3 py-2 my-5 rounded-md "
            >
              Save Now
            </button>
          </div>
        </Deshboard>
      </div>
      <div>
        <Toaster position="top-center" />
      </div>
    </Admin>
  );
}
