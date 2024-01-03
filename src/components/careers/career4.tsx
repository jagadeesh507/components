import React from "react";

function Career4() {
  const Jobs = {
    title: "Job Department",
    jobTitle: "Job Title",
    location: "Location",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  };
  return (
    <div className="text-center p-4 md:p-20">
      <div className="pb-8 md:pb-16">
        <p>Tagline</p>
        <h1 className="text-4xl font-extrabold pb-4">Job Openings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="join join-vertical w-full lg:w-[60%] text-left">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {Jobs.title}
            </div>
            <div className="collapse-content">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="card border mb-4">
                  <div className="card-body">
                    <div className="flex justify-between pb-4">
                      <div className="flex flex-col">
                        <h2 className="card-title">{Jobs.jobTitle}</h2>
                        <p>{Jobs.location}</p>
                      </div>
                      <div className="card-actions">
                        <button className="btn btn-outline">Apply now</button>
                      </div>
                    </div>
                    <p>{Jobs.des}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider divider-neutral" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career4;
