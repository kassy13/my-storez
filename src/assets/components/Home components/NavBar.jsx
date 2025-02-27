import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/image-removebg-preview (1).png";
import Auth from "../../../context/context";

const NavBar = () => {
  const { logout } = useContext(Auth);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const loggedUser = sessionStorage.getItem("currentUser");
    setCurrentUser(loggedUser);
  }, [currentUser]);

  const handleClick = async () => {
    if (currentUser) {
      await logout();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
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
      <div className="flex">
        <Link
          to={"/signup"}
          className=" bg-gray-400 p-1.5 px-4 rounded text-slate-900 "
        >
          Register
        </Link>
        <Link
          to={"/signin"}
          className={`text-white p-1.5 ml-5  ${
            currentUser ? "!hidden" : "!block"
          }`}
          onClick={handleClick}
        >
          Sign In
        </Link>
        <Link
          to={"/"}
          className={`text-white p-1.5 ml-5 ${
            currentUser ? "!block" : "!hidden"
          }`}
          onClick={handleClick}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
