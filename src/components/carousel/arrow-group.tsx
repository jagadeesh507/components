"use client";
import { LeftIcon } from "./arrow-icons";
import { RightIcon } from "./arrow-icons";
import { useState } from "react";

export default function ArrowGroup({
  slides = [],
  currentindex,
  setCurrentIndex,
}) {
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

  console.log("index", currentindex);

  return (
    <div className="flex gap-x-3">
      <div
        className="border border-1 rounded-full cursor-pointer"
        onClick={handlePrev}
      >
        <div className="p-2">
          <LeftIcon />
        </div>
      </div>
      <div
        className="border border-1 rounded-full cursor-pointer"
        onClick={handleNext}
      >
        <div className="p-2">
          <RightIcon />
        </div>
      </div>
    </div>
  );
}
