import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Tabs = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="btn-group justify-between my-8">
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#FF6F00' : '#644F9C',
            };
          }}
          to={'/popUnder'}
          className=" flex items-center w-52 justify-center h-10 rounded-[2rem] uppercase text-lg text-white shadow mb-2"
        >
          Pop-Under
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#FF6F00' : '#644F9C',
            };
          }}
          to={'/bannerAd'}
          className=" flex items-center w-52 justify-center h-10 rounded-[2rem] uppercase  text-lg  text-white shadow"
        >
          Banner Ad
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#FF6F00' : '#644F9C',
            };
          }}
          to={'/native'}
          className=" flex items-center w-52 justify-center h-10 rounded-[2rem] uppercase  text-lg  text-white shadow"
        >
          Native
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#FF6F00' : '#644F9C',
            };
          }}
          to={'/skim'}
          className=" flex items-center w-52 justify-center h-10 rounded-[2rem] uppercase  text-lg  text-white shadow"
        >
          Skim
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
};

export default Tabs;
