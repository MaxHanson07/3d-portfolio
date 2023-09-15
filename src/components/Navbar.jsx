import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { github, linkedin } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex items-center">
            {" "}
            {/* Add a div to contain name and GitHub icon */}
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain mr-3"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer mr-10">
              Max Hanson
            </p>
          </div>
          <div
            onClick={() =>
              window.open("https://github.com/MaxHanson07", "_blank")
            }
            className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="git hub"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/maxwellhanson07/", "_blank")
            }
            className="bg-blue-700 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin}
              alt="linked in"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white
            text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px]
          z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins
            font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
