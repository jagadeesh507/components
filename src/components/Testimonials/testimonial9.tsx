"use client";
import React from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial9: React.FC = () => {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full md:px-20">
      <Slider {...settings}>
        {slides.map((values, index) => (
          <div key={index} className="card border">
            <div className="card-body md:gap-y-8">
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
      </Slider>
    </div>
  );
};

export default Testimonial9;
