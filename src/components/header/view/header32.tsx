function Header32() {
  const search = (
    <svg
      className="svg-icon search-icon w-6"
      aria-labelledby="title desc"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.9 19.7"
    >
      <title id="title">Search Icon</title>
      <desc id="desc">A magnifying glass icon.</desc>
      <g className="search-path" fill="none" stroke="#848F91">
        <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
        <circle cx="8" cy="8" r="7" />
      </g>
    </svg>
  );
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./images/header_image_1.svg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center items-center">
        <div className="flex flex-col justify-center gap-6 w-full md:w-[50%]">
          <h1 className="font-extrabold text-5xl">
            Medium length hero heading goes here
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="flex justify-center items-center gap-5">
            <div className="relative w-autos md:w-96">
              <div className="absolute insert-0 top-4 left-2">{search}</div>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered pl-10 w-full rounded-none"
              />
            </div>
            <button className="btn btn-neutral rounded-none">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header32;
