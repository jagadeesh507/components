import React from "react";

function Faq9() {
  return (
    <div className="text-lg p-4 md:p-20">
      <h1 className="text-4xl font-extrabold pb-4 ">FAQs</h1>
      <p className="pb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="">
        {Array.from({ length: 6 }, (_, index) => (
          <div>
            <div className="divider divider-neutral" />
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="font-bold w-full md:min-w-[40%] md:max-w-[50%]">
                Question text goes here
              </h2>
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

export default Faq9;
