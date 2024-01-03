import React from "react";

function Portfolio15() {
  return (
    <div className="p-4 md:p-20">
      <div className="flex flex-col gap-y-6">
        <p>Portfolio</p>
        <h1 className="text-4xl font-extrabold">Short heading goes here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex flex-col gap-y-5">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index}>
            <div className="divider" />
            <div className="flex flex-col md:flex-row justify-between md:gap-y-6 ">
              <div className="flex flex-col justify-center gap-y-6 ">
                <h2 className="text-2xl font-bold cursor-pointer hover:underline">
                  Project name goes here
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex gap-x-4 cursor-pointer">
                  <span className="badge p-3">Tag one</span>
                  <span className="badge p-3">Tag one</span>
                  <span className="badge p-3">Tag one</span>
                </div>
                <button className="btn btn-ghost w-32">View Project</button>
              </div>
              <div className="pt-6 md:pt-0">
                <img
                  className="w-full md:h-[450px]"
                  src="../images/header_image_1.svg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio15;
