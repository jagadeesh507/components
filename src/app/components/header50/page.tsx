import React from 'react'

function Header50() {
  return (
    <div>
      <div className="hero -mx-5" style={{backgroundImage: `url('./empty_background.svg')`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="flex flex-col gap-6 justify-start   py-40 text-neutral-content">
        <h1 className="text-md font-bold base-100">
          Tagline
        </h1>
        <h1 className="text-6xl font-bold ">
          Short heading here
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </h1>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-neutral rounded-none">Button</button>
          <button className="btn btn-outline rounded-none">Button</button>
        </div>
  </div>
</div>
    </div>
  )
}

export default Header50
