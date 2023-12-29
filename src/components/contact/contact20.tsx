import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

function Contact20() {
  const contactIcon = [<CiMail />, <FaPhone />, <IoLocationOutline />];
  const contactInfo = [
    {
      Contact: "hello@relume.io",
      Service: "Email",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    },
    {
      Contact: "123 Sample St",
      Service: "Phone",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero..",
    },
    {
      Contact: "Sydney NSW 2000 AU",
      Service: "Phone",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center text-center p-4 md:p-20">
      <div className="space-y-4 pb-10">
        <p className="font-semibold">Tagline</p>
        <h1 className="font-extrabold text-4xl">Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="gap-10 flex flex-col md:flex-row justify-center items-center">
        {contactIcon.map((icon, index) => (
          <div key={index} className="flex flex-col gap-4 items-center">
            {React.cloneElement(icon, { size: 40 })}
            <div className="flex flex-col gap-6">
              <p className="font-extrabold text-3xl">
                {contactInfo[index].Service}
              </p>
              <p>{contactInfo[index].dis}</p>
              <a className="link link-hover underline">
                {contactInfo[index].Contact}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact20;
