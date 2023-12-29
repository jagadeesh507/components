import React from "react";

function Feature1() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 py-20 z-10">
        <div className="hero-content flex-col flex-col-reverse md:flex-row-reverse gap-12 md:gap-20">
          <img src="../empty_background.svg" className="w-full md:w-[40%]" />
          <div className="flex flex-col justify-center gap-6 w-full md:w-[50%]">
            <h1 className="font-extrabold text-5xl">
              Medium length section heading goes here
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="flex md:flex-row gap-5">
              <button className="btn btn-outline rounded-none w-20 md:w-auto">
                Button
              </button>
              <button className="btn w-22 md:w-auto">
                Button
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
