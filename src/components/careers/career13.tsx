import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

function Career13() {
  const job = {
    title: "job Title",
    department: "Department",
    location: "Location",
    jobType: "Contract Type",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  };
  return (
    <div className="text-center p-4 md:p-20 text-xl ">
      <div className="pb-8 md:pb-16">
        <p>Tagline</p>
        <h1 className="text-4xl font-extrabold pb-4">Job Openings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="card border">
            <div className="card-body flex  gap-y-6">
              <div className="flex justify-between">
                <h2 className="card-title">{job.title}</h2>
                <span className="badge p-4 rounded-none">{job.department}</span>
              </div>
              <div className="text-left flex flex-col gap-y-6">
                <p>{job.des}</p>
                <div className="flex gap-x-4 ">
                  <div className="flex gap-x-3">
                    {React.cloneElement(<FaLocationDot />, { size: 24 })}
                    <span>{job.location}</span>
                  </div>
                  <div className="flex gap-x-3">
                    {React.cloneElement(<IoMdTime />, { size: 24 })}
                    <span>{job.jobType}</span>
                  </div>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-outline">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career13;
