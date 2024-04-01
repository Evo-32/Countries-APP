import React from "react";
import MenuIcon from "./MenuIcon";
import LogoIcon from "./LogoIcon";

const NavBar = () => {
  return (
    <nav className="navbar flex justify-between items-center text-slate-50 px-40 py-10">
      <ul className="flex items-center">
        <li>
          <a href="#">
            <LogoIcon />
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <ul className="nav-link space-x-4 hidden md:flex">
          <li>
            <a href="#">Countries</a>
          </li>
          <li>
            <a href="#">Continents</a>
          </li>
          <li>
            <a href="#">Region</a>
          </li>
        </ul>
        <button className="md:hidden">
          <MenuIcon className="text-white text-2xl font-bold" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
