import React from "react";
import { Helmet } from "react-helmet";

const SimplePage = () => {
  return (
    <div>
      <Helmet>
        <title>EdTech Learning Platform</title>
        <meta
          name="description"
          content="Explore our innovative EdTech Learning Platform to enhance your education experience."
        />

        <meta property="og:title" content="EdTech Learning Platform" />
        <meta
          property="og:description"
          content="Explore our innovative EdTech Learning Platform to enhance your education experience."
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=EdTech+Learning+Platform"
        />
        <meta
          property="og:url"
          content="https://edtech-learning-ny.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className=" text-5xl">Welcome to the EdTech Learning Platform</h1>
      <p>
        Enhance your education experience with our innovative tools and
        resources.
      </p>
    </div>
  );
};

export default SimplePage ;