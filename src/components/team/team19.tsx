import React from "react";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Team19() {
  const icons = [<FaFacebook />, <FaXTwitter />, <FaYoutube />];
  const teammembers = {
    fullName: "Full name",
    jobTitle: "Job Title",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  };
  return (
    <div className="flex flex-col space-y-10 md:flex-row justify-between p-4 md:p-20">
      <div className="flex flex-col space-y-5 mb-2 max-w-full md:max-w-[30%]">
        <p>TagLine</p>
        <h1 className="text-4xl font-extrabold">Our team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="btn btn-outline w-36">Open positions</button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="card w-full md:w-96">
            <div className="avatar ">
              <div className="w-20 ml-6 rounded-full">
                <img src="../images/header_image_1.svg" />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">{teammembers.fullName}</h2>
              <p>{teammembers.jobTitle}</p>
              <p>{teammembers.des}</p>
              <div className="card-actions pt-4">
                {icons.map((icon, index) => (
                  <a className="link link-hover" key={index}>
                    {React.cloneElement(icon, { size: 22 })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team19;
