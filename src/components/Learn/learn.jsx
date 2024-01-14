import React from "react";
import Layout from "../Layout/layout";

export default function Learn() {
  return (
    <Layout>
      <div className=" sm:px-7">
        <h1 className="headingTextSize">What You'll Learn</h1>
        <p className="paragrahp mt-10 tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In possimus
          sint aperiam corrupti dolorum. Excepturi sunt quos nostrum odio
          ratione nobis optio distinctio adipisci rem, accusamus dolor ab
          assumenda, itaque provident, iure deserunt asperiores! Exercitationem
          quibusdam ex deserunt fugiat modi minima cupiditate debitis sequi
          eaque, molestiae delectus, nihil, facilis repudiandae. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. At, quibusdam ab pariatur
          sed animi libero totam et. Quo cupiditate labore nesciunt, iusto
          explicabo consectetur facere nulla earum quaerat! Voluptate dolorem,
          quo animi facilis nihil excepturi hic facere, obcaecati pariatur
          accusantium consectetur nesciunt harum, corrupti nulla laborum? Earum
          sequi ipsum neque accusantium dicta quis debitis molestias! Sequi,
          quasi! Eaque, exercitationem suscipit.
        </p>
        <div className="mt-10 hidden sm:block">
          <div className="flex gap-5 ">
            <div className="w-1/3">
              <ul className=" ">
                <li className="list-disc pt-2">
                  Believe in yourself and all that you are. Know that there is
                  something inside you that is greater than any obstacle."
                </li>
                <li className="list-disc pt-2">
                  The only limit to our realization of tomorrow will be our
                  doubts of today."
                </li>
                <li className="list-disc pt-2">
                  Success is not final, failure is not fatal: It is the courage
                  to continue that counts."
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <ul>
                <li className="list-disc pt-2">
                  "Your attitude, not your aptitude, will determine your
                  altitude."
                </li>
                <li className="list-disc pt-2">
                  "The only way to do great work is to love what you do."
                </li>
                <li className="list-disc pt-2">
                  "Success usually comes to those who are too busy to be looking
                  for it."
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <ul>
                <li className="list-disc pt-2">
                  Don't watch the clock; do what it does. Keep going."
                </li>
                <li className="list-disc pt-2">
                  It's not whether you get knocked down, it's whether you get
                  up."
                </li>
                <li className="list-disc pt-2">
                  The only place where success comes before work is in the
                  dictionary."
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex gap-5 sm:gap-10 mt-10">
          <button className=" px-3 py-2 botton"> Download Full Sylabus</button>
          <button className=" px-3 py-2 botton">
            {" "}
            Consult with our specialist
          </button>
        </div>
      </div>
    </Layout>
  );
}
