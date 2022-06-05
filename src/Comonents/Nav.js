import React from 'react';

const Nav = () => {
  const menu = (
    <>
      <li className="text-primary">
        <a href="/">HOME</a>
      </li>
      <li className="text-secondary">
        <a href="/">ADVERTISERS</a>
      </li>
      <li className="text-secondary ">
        <a href="/">PUBLISHERS</a>
      </li>
      <li className="text-secondary ">
        <a href="/">INFLUENCERS</a>
      </li>
      <li className="text-secondary ">
        <a href="/">AD FORMATS</a>
      </li>
      <li className="text-secondary ">
        <a href="/">PUBLISHERS</a>
      </li>
      <li className="text-secondary ">
        <a href="/">BLOG</a>
      </li>
      <li className="text-secondary ">
        <a href="/">CONTACT US </a>
      </li>
    </>
  );
  return (
    <header className=" uppercase">
      <div className="flex items-center justify-between  pt-8 mx-6">
        <button className="btn btn-ghost px-0 text-3xl font-bold">
          MK Tech.
        </button>
        <p className="font-semibold">
          <span className="text-green-400">BN </span>/ <span> EN</span>
        </p>
      </div>

      <div className="navbar p-0 min-h-full justify-between pl-4">
        <div className="sm:navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            {/* Mobile */}
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-semibold "
            >
              {menu}
            </ul>
          </div>
        </div>
        <div className="navbar-start w-full justify-between hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">{menu}</ul>
        </div>
        <div className="navbar-end pr-8 sm:w-1/2 w-full">
          <div className="bg-white rounded-[2rem] p-1 shadow-lg uppercase flex items-center">
            <button className=" px-6 uppercase">Login</button>
            <button className="py-2 px-6 rounded-[2rem] uppercase bg-primary text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
