import React from "react";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Team1() {
  const icons = [<FaFacebook />, <FaXTwitter />, <FaYoutube />];
  const teammembers = {
    fullName: "Full name",
    jobTitle: "Job Title",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  };
  return (
    <div className="text-center">
      <div className="flex flex-col space-y-5 mb-2">
        <p>TagLine</p>
        <h1 className="text-4xl font-extrabold">Our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 md:mt-20">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="card w-76">
            <div className="avatar flex justify-center">
              <div className="w-20 rounded-full">
                <img src="../images/header_image_1.svg" />
              </div>
            </div>
            <div className="card-body items-center text-center">
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
      <div className="flex flex-col space-y-6 pb-10 pt-10 md:pt-28">
        <h1 className="font-extrabold text-3xl">We're hiring!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="items-center">
          <button className="btn btn-outline w-36">Open positions</button>
        </div>
      </div>
    </div>
  );
}

export default Team1;
