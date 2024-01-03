import React from "react";

function Stats2() {
  return (
    <div className=" p-10 md:p-20">
      <div className="flex flex-col md:flex-row justify-between md:gap-x-20 gap-x-0 gap-y-8 md:gap-y-0 ">
        <h1 className="md:min-w-[40%] md:max-w-[50%] text-4xl font-extrabold">
          Long heading is what you see here in this feature section
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-8 md:mt-16">
        {Array.from({ length: 3 }, (_, index) => (
          <div className="flex font-bold gap-x-10 gap-y-10">
            <div className="border border-3" />
            <div>
              <p className="text-6xl mb-5">30%</p>
              <p>Short heading goes here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats2;
