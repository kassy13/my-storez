import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/image-removebg-preview (1).png";
import Auth from "../../../context/context";
import { toast } from "react-toastify";

const NavBar = () => {
  const { logout, categories, getAllCategories } = useContext(Auth);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const loggedUser = sessionStorage.getItem("currentUser");
    setCurrentUser(loggedUser);
    getAllCategories();
  }, [currentUser]);

  const handleClick = async () => {
    if (currentUser) {
      await logout();
      setCurrentUser("");
      toast.success("Logout successful!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  //Function for handling categoryclick
  const handleCategoryClick = (cate) => {
    navigate(`/category/${cate}`);
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
        <div className="group relative">
          <button className="cursor-pointer hover:text-purple-300 text-white">
            Categories
          </button>
          <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 w-60 h-96 overflow-y-auto z-50">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category.id}
                  className="px-4 py-2 hover:bg-gray-100 overflow-scroll cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">Loading..</li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex">
        <Link
          to={"/signup"}
          className=" bg-gray-400 p-1.5 px-4 rounded text-slate-900 "
        >
          Register
        </Link>

        {currentUser ? (
          <Link
            to={"/"}
            className={`text-white p-1.5 ml-5 `}
            onClick={handleClick}
          >
            Logout
          </Link>
        ) : (
          <Link to={"/signin"} className={`text-white p-1.5 ml-5  `}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
