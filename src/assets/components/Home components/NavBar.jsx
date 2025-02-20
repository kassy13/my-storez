import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex gap-5 justify-between items-center w-full">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"
          alt=""
          className="w-16 h-16 object-contain"
        />
      </div>
      <div className="flex gap-5">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            `p-2 ${
              isPending
                ? "bg-black text-yellow-400"
                : isActive
                ? "text-white bg-gray-400 p-2"
                : "text-yellow-400"
            }`
          }
        >
          Homez{" "}
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            ` p-2 ${
              isPending
                ? ""
                : isActive
                ? "!text-white !bg-yellow-400"
                : "bg-blue-400"
            }`
          }
        >
          About{" "}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
