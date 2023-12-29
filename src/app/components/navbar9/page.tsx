import React from 'react'

function Navbar9() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-none w-80 ml-4"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li className="transition duration-1000 delay-1000">
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none ">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <button className="btn btn-outline rounded-none m-1 btn-sm">
                  Button 1
                </button>
              </li>
              <li>
                <button className="btn btn-neutral rounded-none m-1 btn-sm">
                  Button 2
                </button>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 w-44 border-neutral border-2 border-neutral-content rounded-none">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn hidden md:block">Button</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar9
