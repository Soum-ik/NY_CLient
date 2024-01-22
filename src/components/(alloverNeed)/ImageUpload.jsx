/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ImageUploader.js
import  { useState } from "react";

const ImageUploader = ({ onImageUpload, text, type }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      const apiKey = "7a4a20aea9e7d64e24c6e75b2972ff00";
      const uploadUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;

      try {
        setLoading(true);
        const response = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.data.url);
          onImageUpload(data.data.url, type); // Pass the URL and type to the parent component
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1 className=" mb-2 text-xs">{text}</h1>
      <input type="file" onChange={handleFileChange} />
      {loading && <p>Uploading...</p>}
    </div>
  );
};

export default ImageUploader;
