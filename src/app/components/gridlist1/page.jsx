import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Gridlist1 = () => {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-3 text-md my-5">
          <p className="text-3xl text-bold">People you may know</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
        <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-neutral">Neutral</button>
        </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <HiOutlineDotsHorizontal
              tabIndex={0}
              className="mx-3 mt-3 text-2xl hover:scale-125 duration-150"
            />

            <ul
              tabIndex={0}
              className="border-2 md:-mt-12 rounded-none dropdown-content z-[1] menu p-1 shadow bg-base-100 w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3 mt-10">
      {Array.from("1234565").map((ele,id)=>
        (<div className="flex flex-col items-center justify-center gap-6 border-2">
        <div className="avatar mt-5">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="text-center">
        <p>Full name</p>
        <p>Job title</p>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="btn btn-outline w-4/5 mb-8">Default</button>
      </div>)
      )})
      </div>
    </div>
  );
};

export default Gridlist1;
