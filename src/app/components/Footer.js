"use client"; // this is a client component 👈🏽

import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center mx-2">
      <p className="mt-4 text-center text-white font-thin mb-4">Made with </p>
      <AiFillHeart className="mx-2" />
      <p className="text-white font-extralight">
        by Aviv Amrusi Hagever She ben 25
      </p>
    </div>
  );
};

export default Footer;
