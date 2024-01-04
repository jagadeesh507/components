"use client";
import React from "react";
import { useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TbBrandWebflow } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

function Testimonial7() {
  const [currentindex, setCurrentIndex] = useState(0);

  const slides = [
    {
      icon: <TbBrandWebflow size={36} />,
      title: "Web flow 1",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      avatar: "../images/avatars/avatar1.png",
      name: "full Name",
      position: "full stack developer",
      company: "contentQL",
    },
    {
      icon: <TbBrandWebflow size={36} />,
      title: "Web flow 2 ",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      avatar: "../images/avatars/avatar2.jpg",
      name: "full Name",
      position: "frontEnd developer",
      company: "ResonateAes",
    },
    {
      icon: <TbBrandWebflow size={36} />,
      title: "web flow 3",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      avatar: "../images/avatars/avatar3.avif",
      name: "full Name",
      position: "Backend Developer",
      company: "AES",
    },
  ];
  const handlePrev = () => {
    const isFirstslide = currentindex === 0;
    const prev = isFirstslide ? slides.length - 1 : currentindex - 1;
    setCurrentIndex(prev);
  };

  const handleNext = () => {
    const isLastslide = currentindex === slides.length - 1;
    const prev = isLastslide ? 0 : currentindex + 1;
    setCurrentIndex(prev);
  };

  const handleDots = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="w-full p-4 relative h-[500px] text-center text-lg ">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-8 duration-500  md:px-36">
        <div className="flex gap-x-4">
          {slides[currentindex].icon}
          <p className="text-2xl font-extrabold">
            {slides[currentindex].title}
          </p>
        </div>
        <p className="font-extrabold">{slides[currentindex].dec}</p>
        <div>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={slides[currentindex].avatar} />
            </div>
          </div>
          <p className="text-sm font-semibold">{slides[currentindex].name}</p>
          <p className="text-sm">
            {slides[currentindex].position},{" "}
            <span>{slides[currentindex].company}</span>
          </p>
        </div>
      </div>

      <div
        onClick={handlePrev}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 font-bold cursor-pointer border border-2 rounded-full hidden md:block"
      >
        <AiOutlineLeft size={20} className="m-2" />
      </div>
      <div
        onClick={handleNext}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl cursor-pointer border border-2 rounded-full hidden md:block"
      >
        <AiOutlineRight size={20} className="m-2" />
      </div>
      <div className="flex justify-center ">
        {slides.map((item, index) => (
          <div
            key={index}
            onClick={() => handleDots(index)}
            className="cursor-pointer hover:scale-110 hover:text-primary"
          >
            <BsDot size={24} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial7;
