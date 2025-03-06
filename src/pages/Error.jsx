import React from "react";
import errorImg from "../assets/img/404 Error-pana.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <img src={errorImg} alt="" className="w-full h-80 object-contain" />
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default Error;
