// PricingCard.js
import React from "react";

function PricingCard(data: {
  planType:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  priceperMonth:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  priceperYear:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  access: string[];
}) {
  if (!data) {
    return <p>empty data</p>;
  }
  return (
    <div className="border p-4">
      <h2>{data.planType}</h2>
      <p>Price per Month: ${data.priceperMonth}</p>
      <p>Price per Year: ${data.priceperYear}</p>
      <ul>
        {data.access.map((feature: string) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCard;
