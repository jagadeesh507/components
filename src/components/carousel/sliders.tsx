"use client";
import React from "react";
import ArrowGroup from "./arrow-group";
import { useState } from "react";

function Sliders() {
  const [currentindex, setCurrentIndex] = useState(0);
  const slides: any[] = [
    {
      review: 2,
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "../images/header_image_1.svg",
      name: "Name Surname",
      jobposition: "Position",
      company: "Company",
    },
    {
      review: 5,
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "../images/header_image_1.svg",
      name: "Name Surname",
      jobposition: "Position",
      company: "Company",
    },
    {
      review: 3,
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "../images/header_image_1.svg",
      name: "Name Surname",
      jobposition: "Position",
      company: "Company",
    },
    {
      review: 2,
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "../images/header_image_1.svg",
      name: "Name Surname",
      jobposition: "Position",
      company: "Company",
    },
    {
      review: 1,
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "../images/header_image_1.svg",
      name: "Name Surname",
      jobposition: "Position",
      company: "Company",
    },
  ];

  return (
    <div className="p-4 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-5">
        {slides.map((values, index) => (
          <div key={index} className="card border">
            <div className="card-body -mx-2 gap-y-6 md:gap-y-8">
              <div className="rating">
                {[1, 2, 3, 4, 5].map((value, index1) => (
                  <input
                    key={index1}
                    type="radio"
                    value={value}
                    name={`rating-${index}-${index1}`}
                    checked={values.review === value}
                    className="mask mask-star-2"
                  />
                ))}
              </div>
              <p>{values.dec}</p>
              <div className="flex gap-x-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={values.avatar} />
                  </div>
                </div>
                <div>
                  <p>{values.name}</p>
                  <p>
                    {values.jobposition}, <span>{values.company}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowGroup
        slides={slides}
        currentindex={currentindex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default Sliders;
