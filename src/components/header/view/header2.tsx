function Header2() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col flex-col-reverse md:flex-row-reverse gap-12 md:gap-20">
        <img src="../images/header_image_1.svg" className="w-full md:w-[50%]" />
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
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered w-full rounded-none w-full md:max-w-xs"
            />
            <button className="btn btn-neutral rounded-none">Sign Up</button>
          </div>
          <p className="text-xs">
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header2;
