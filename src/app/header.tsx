"use client";
import components from "./data";
import { useTheme } from "@/store/theme";

export default function Home() {
  const { settheme }: any = useTheme();
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  return (
    <div className="flex justify-between">
      <div className="flex-none z-50 ml-20 ">
        <ul className=" menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Components</summary>
              <ul className="p-2  z-50 h-96 overflow-x-hidden overflow-scroll">
                {components?.map((ele, id) => {
                  return (
                    <li key={id} className="z-50 ">
                      <a
                        href={`/components/${ele}`}
                        className="link no-underline"
                      >
                        {ele}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex-none z-50 mr-20">
        <ul className=" menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Themes</summary>
              <ul className="p-2  z-50 h-72 overflow-x-hidden overflow-scroll">
                {themes?.map((ele, id) => {
                  return (
                    <li
                      key={id}
                      className="z-50 "
                      onClick={() => {
                        settheme(ele);
                      }}
                    >
                      <a className="link  no-underline">{ele}</a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
