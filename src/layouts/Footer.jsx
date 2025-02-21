import React from "react";
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900  py-4 ">
      <p className="text-purple-300 flex items-center  justify-center gap-2 w-full">
        Copy right
        <RiCopyrightFill className="text-purple-300" />{" "}
      </p>
    </footer>
  );
};

export default Footer;
