import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/image-removebg-preview (1).png";

const NavBar = () => {
  return (
    <nav className="flex gap-5 justify-between items-center w-full">
      <div>
        <img src={logo} alt="" className="w-16 h-16 object-contain" />
      </div>
      <div className="flex gap-5">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            `p-1 px-4 ${
              isPending
                ? " text-white"
                : isActive
                ? "text-white border-b rounded "
                : "text-purple-300"
            }`
          }
        >
          Homez
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            ` p-1 px-4 rounded-xl flex items-center  ${
              isPending
                ? " text-white"
                : isActive
                ? "text-white border-b  rounded "
                : "text-purple-300"
            }`
          }
        >
          About{" "}
        </NavLink>
      </div>
      <div>
        <Link
          to={"/signup"}
          className=" bg-gray-400 p-1.5 px-4 rounded text-slate-900 "
        >
          SignUp
        </Link>
        <Link to={"/signin"} className="text-white p-1.5 ml-5">
          SignIn
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
