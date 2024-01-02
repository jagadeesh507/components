import React from "react";

function Faq1() {
  const faqs = {
    title: "Question text goes here",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  };
  return (
    <div className="text-center p-4 md:p-20">
      <div className="pb-8 md:pb-16">
        <h1 className="text-4xl font-extrabold pb-4">FAQs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="join join-vertical w-full md:w-[50%] text-left">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {faqs.title}
            </div>
            <div className="collapse-content">
              <p>{faqs.des}</p>
            </div>
            <div className="divider divider-neutral" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 pt-5 md:pt-10">
        <h1 className="font-extrabold text-3xl">Still have questions?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-center">
          <button className="btn btn-outline w-36">contact</button>
        </div>
      </div>
    </div>
  );
}

export default Faq1;
