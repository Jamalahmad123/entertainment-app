import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import { homeIcon, avatar } from "../assets";
import { ReactComponent as MovieIcon } from "../assets/movie-icon.svg";
import { ReactComponent as TrendingIcon } from "../assets/trending-icon.svg";
import { ReactComponent as TvIcon } from "../assets/tv-icon.svg";

const Nav = () => {
  return (
    <nav className="bg-darkBlue py-5 z-50 px-3 flex flex-row justify-between items-center md:flex-col sticky top-0 md:fixed mx-auto md:m-6 md:left-0 md:min-h-[80vh] md:rounded-xl w-full md:w-24">
      <NavLink to="/">
        <img src={homeIcon} alt="entertainment icon" className="w-6" />
      </NavLink>
      <div className="flex items-center justify-between sm:w-2/5 w-1/2 md:h-[200px] md:flex-col">
        <NavLink to="/" className="nav-link">
          <TrendingIcon />
        </NavLink>
        <NavLink to="/movies" className="nav-link">
          <MovieIcon />
        </NavLink>
        <NavLink to="/tv-shows" className="nav-link">
          <TvIcon />
        </NavLink>
      </div>
      <div className="w-10 border border-white rounded-full">
        <img src={avatar} alt="avatar" className="w-full object-cover" />
      </div>
    </nav>
  );
};

export default Nav;
