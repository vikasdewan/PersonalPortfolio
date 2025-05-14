import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants/index.js";
import { logo, close, menu } from "../assets/index.js";
import { div, li } from "framer-motion/client";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`
          ${styles.paddingX} w-full flex fixed top-0 z-20 bg-black items-center 
          `}
    >
      <div className="w-full flex   justify-between items-center max-w-7xl h-20  mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Vikas &nbsp; <span className="sm:block  ">Dewangan</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-gray-500"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
          <li
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1HAnzHmD9-tC7LUO_SWOalmwINAWB0Bbi/view?usp=sharing"
              );
            }}
            className="border-amber-500 border-2 bg-violet-500 h-8 justify-center w-20 items-center flex rounded-xl font-bold cursor-pointer"
          >
            {" "}
            Resume
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "hidden " : "flex"
            } p-4 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none  flex justiyfy-end items-center flex-col gap-4 p-2">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-500"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle); 
                    setActive(link.title);
                  }}
                >
                  <Link to={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
              <li
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1HAnzHmD9-tC7LUO_SWOalmwINAWB0Bbi/view?usp=sharing"
                  );
                }}
                className="border-amber-500 border-2 bg-violet-500 h-8 justify-center w-20 items-center flex rounded-xl font-bold cursor-pointer"
              >
                {" "}
                Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
