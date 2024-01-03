import React, { Fragment } from "react";

function Stats34() {
  return (
    <div className="p-4 md:p-20">
      <div className="pb-8 md:pb-16 text-center">
        <p className="pb-5">Tagline</p>
        <h1 className="text-4xl font-extrabold pb-4">
          Short heading goes here
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-x-10">
        <div className="flex flex-col gap-y-5">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title text-5xl">30%</h2>
                <p>Short heading goes here</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10 md:pt-0">
          <img src="../images/header_image_1.svg" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Stats34;
