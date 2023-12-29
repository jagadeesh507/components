import PricingCard from "./pricing-card";

function Pricing18() {
  const pricingData = [
    {
      planType: "Basic plan",
      priceperMonth: "19",
      priceperYear: "199",
      access: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
      ],
    },
    {
      planType: "Business plan",
      priceperMonth: "29",
      priceperYear: "299",
      access: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
      ],
    },
    {
      planType: "Enterprise plan",
      priceperMonth: "49",
      priceperYear: "499",
      access: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
      ],
    },
  ];

  const check = (
    <svg
      className=""
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 0 24 24"
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  );

  console.log(pricingData);
  return (
    <div className="flex justify-center p-4 md:p-20 bg-base-200 text-base-content">
      <div className="flex flex-col gap-6 text-center">
        <p className="font-semibold">Tagline</p>
        <h1 className="text-4xl font-extrabold">Pricing plan</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
          {pricingData.map((pricing) => (
            <div className="card w-full lg:w-76 rounded-none border border-solid border-1 border-neutral relative">
              <div className="card-body items-center text-center">
                <div className="space-y-3">
                  <h2 className="card-title">{pricing.planType}</h2>
                  <p className="font-extrabold text-2xl">
                    <span className="text-4xl"> ${pricing.priceperMonth}</span>{" "}
                    /mo
                  </p>
                  <p>or $ {pricing.priceperYear} yearly</p>
                </div>
                <div className="flex justify-start flex-col list-none pt-10 pb-10 space-y-5">
                  {pricing.access.map((price) => (
                    <div className="flex gap-x-6">
                      {check}
                      <li>{price}</li>
                    </div>
                  ))}
                </div>
                <div className="card-actions w-full px-8 absolute bottom-4">
                  <button className="btn btn-outline w-full">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Pricing18;
