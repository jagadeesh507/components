"use client";
import components from "./data";

export default function Home() {
  return (
    <div className="flex-none z-50">
      <ul className=" menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Components</summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              {components?.map((ele, id) => {
                return (
                  <li key={id}>
                    <a href={`/components/${ele}`}>{ele}</a>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
