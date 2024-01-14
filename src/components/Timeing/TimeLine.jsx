import React from "react";
import Layout from "../Layout/layout";
export default function TimeLine() {
  return (
    <Layout>
      <div className=" sm:px-10 py-20 sm:py-32 space-y-5 ">
        <h5 className=" headingTextSize mb-5 ">Timeline</h5>
        <h5 className=" font-textFont font-normal  tracking-widest text-[18px]">Our QA Training Progrma last 15 weeks</h5>
        <p className=" paragrahp">
          The Job Placement Assistance Program, provided by our partners, lasts
          approximately 120 days (4months) offers a weekly live session
          breakdown with the added benefit of haveing all sessions recorded,
          allowing participants to learn at their own pace
        </p>
      </div>
    </Layout>
  );
}
