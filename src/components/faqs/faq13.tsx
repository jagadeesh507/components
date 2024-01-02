import React from "react";

function Faq13() {
  return (
    <div className="text-lg p-4 md:p-20">
      <h1 className="text-4xl font-extrabold pb-4">FAQs</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-x-5 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h2 className="card-title font-bold">Question text goes here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 pt-5 md:pt-10">
        <h1 className="font-extrabold text-3xl">Still have questions?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn btn-outline btn-lg w-36">contact</button>
      </div>
    </div>
  );
}

export default Faq13;
